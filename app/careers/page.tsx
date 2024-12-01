import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'

const careers = [
    {
        title: "Cybersecurity",
        slug: "cybersecurity",
        description: "Protect digital assets and information systems from threats."
    },
    {
        title: "Computer Science",
        slug: "computer-science",
        description: "Develop software and solve complex computational problems."
    },
    {
        title: "Robotics",
        slug: "robotics",
        description: "Design, build, and program robots for various applications."
    },
    {
        title: "Data Science",
        slug: "data-science",
        description: "Analyze and interpret complex data to inform decision-making."
    },
    {
        title: "Artificial Intelligence",
        slug: "artificial-intelligence",
        description: "Create intelligent machines that work and react like humans."
    },
    {
        title: "Web Development",
        slug: "web-development",
        description: "Build and maintain websites and web applications."
    },
    {
        title: "Machine Learning",
        slug: "machine-learning",
        description: "Develop algorithms and statistical models for computer systems to improve their performance."
    },
    {
        title: "Cloud Computing",
        slug: "cloud-computing",
        description: "Design, implement, and manage cloud-based systems and services."
    },
    {
        title: "DevOps",
        slug: "devops",
        description: "Combine software development and IT operations to shorten the development lifecycle."
    }
]

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-6 text-center">Explore Career Paths</h1>
                <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
                    Discover exciting opportunities in the world of technology and find your perfect career path.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {careers.map((career) => (
                        <Link
                            key={career.slug}
                            href={`/careers/${career.slug}`}
                            className="block group"
                        >
                            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        {career.title}
                                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </CardTitle>
                                    <CardDescription>{career.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

