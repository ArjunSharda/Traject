"use client"

import { useState, useMemo } from "react"
import { workshops, Workshop } from "@/lib/workshops"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, MapPin, Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { format, formatDistanceToNow, parseISO, differenceInDays } from 'date-fns'

export default function WorkshopsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [locationFilter, setLocationFilter] = useState("")
    const [sortBy, setSortBy] = useState("date")
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(10)

    const filteredAndSortedWorkshops = useMemo(() => {
        const filtered = workshops.filter((workshop) => {
            const matchesSearch =
                workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                workshop.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesLocation = !locationFilter || workshop.location.toLowerCase().includes(locationFilter.toLowerCase());

            return matchesSearch && matchesLocation;
        });

        filtered.sort((a, b) => {
            if (sortBy === "date") {
                return a.date.getTime() - b.date.getTime();
            } else if (sortBy === "instructor") {
                return a.instructor.localeCompare(b.instructor);
            } else if (sortBy === "title") {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        if (sortOrder === "desc") {
            filtered.reverse();
        }

        return filtered;
    }, [searchTerm, locationFilter, sortBy, sortOrder]);

    const pageCount = Math.ceil(filteredAndSortedWorkshops.length / resultsPerPage);
    const paginatedWorkshops = filteredAndSortedWorkshops.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1 className="text-4xl font-bold mb-8 text-center">Workshops</h1>
                        <div className="space-y-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                                <Input
                                    type="search"
                                    placeholder="Search workshops..."
                                    className="w-full bg-background border-border text-foreground placeholder:text-muted-foreground pl-10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Input
                                    type="text"
                                    placeholder="Filter by location..."
                                    value={locationFilter}
                                    onChange={(e) => setLocationFilter(e.target.value)}
                                    className="w-full bg-background border-border text-foreground placeholder:text-muted-foreground"
                                />
                                <Select
                                    onValueChange={(value) => setResultsPerPage(parseInt(value))}
                                    defaultValue={resultsPerPage.toString()}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Results per page" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="5">5 per page</SelectItem>
                                        <SelectItem value="10">10 per page</SelectItem>
                                        <SelectItem value="20">20 per page</SelectItem>
                                        <SelectItem value="50">50 per page</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <Select onValueChange={setSortBy} defaultValue={sortBy}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Sort by" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="date">Date</SelectItem>
                                            <SelectItem value="instructor">Instructor</SelectItem>
                                            <SelectItem value="title">Title</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                                    >
                                        {sortOrder === "asc" ? "↑" : "↓"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-6" />
                    <div className="space-y-6">
                        {paginatedWorkshops.length > 0 ? (
                            paginatedWorkshops.map((workshop) => (
                                <WorkshopCard key={workshop.id} workshop={workshop} />
                            ))
                        ) : (
                            <p className="text-center text-muted-foreground">No workshops found matching your criteria.</p>
                        )}
                    </div>
                    <div className="mt-8 flex justify-center items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="icon"
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount))}
                            disabled={currentPage === pageCount}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

function WorkshopCard({ workshop }: { workshop: Workshop }) {
    const deadlineDate = parseISO(workshop.deadline);
    const daysUntilDeadline = differenceInDays(deadlineDate, new Date());
    const isDeadlineSoon = daysUntilDeadline <= 3 && daysUntilDeadline >= 0;

    return (
        <Link href={`/workshops/${workshop.id}`} className="block group">
            <div className="rounded-lg border border-border bg-card backdrop-blur-sm p-6 hover:bg-accent transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">{workshop.title}</h3>
                        <p className="text-muted-foreground mt-1">Instructor: {workshop.instructor}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{workshop.location}</span>
                    </div>
                </div>
                <div className="flex items-center text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{format(workshop.date, 'PPP')}</span>
                </div>
                <div className="flex items-center text-muted-foreground mt-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Added {formatDistanceToNow(parseISO(workshop.addedDate))} ago</span>
                </div>
                <p className="mt-4 text-foreground">{workshop.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {workshop.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex justify-between text-sm">
                    <span className="text-muted-foreground">Instructor: {workshop.instructor}</span>
                    <span className={`flex items-center ${isDeadlineSoon ? 'text-red-500' : 'text-muted-foreground'}`}>
                        {isDeadlineSoon && <Clock className="w-4 h-4 mr-1" />}
                        Deadline: {workshop.deadline}
                    </span>
                </div>
            </div>
        </Link>
    )
}
