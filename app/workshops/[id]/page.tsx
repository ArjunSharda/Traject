import { workshops } from "@/lib/workshops"
import { notFound } from "next/navigation"
import { MapPin, Calendar, ArrowRight, Clock, Tag } from 'lucide-react'
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { format, formatDistanceToNow, parseISO, differenceInDays } from 'date-fns'

export async function generateStaticParams() {
    return workshops.map((workshop) => ({
        id: workshop.id,
    }))
}

export default function WorkshopPage({ params }: { params: { id: string } }) {
    const workshop = workshops.find((w) => w.id === params.id)

    if (!workshop) {
        notFound()
    }

    const deadlineDate = parseISO(workshop.deadline);
    const daysUntilDeadline = differenceInDays(deadlineDate, new Date());
    const isDeadlineSoon = daysUntilDeadline <= 3 && daysUntilDeadline >= 0;

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Navbar />
                <main className="flex-1 container mx-auto px-4 py-24">
                    <article className="max-w-3xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-4 text-foreground">{workshop.title}</h1>
                            <p className="text-xl text-muted-foreground">Instructor: {workshop.instructor}</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 mb-8">
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span>{workshop.location}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span>{format(workshop.date, 'PPP')}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span>Added {formatDistanceToNow(parseISO(workshop.addedDate))} ago</span>
                            </div>
                            <div className={`flex items-center ${isDeadlineSoon ? 'text-red-500' : 'text-muted-foreground'}`}>
                                <Tag className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span>
                                    {isDeadlineSoon && <Clock className="w-4 h-4 mr-1 inline" />}
                                    Deadline: {workshop.deadline}
                                </span>
                            </div>
                        </div>

                        <div className="prose dark:prose-invert max-w-none mb-8">
                            <p className="text-foreground">{workshop.description}</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {workshop.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link
                            href={workshop.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
                        >
                            Register Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </article>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}
