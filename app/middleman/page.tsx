import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Briefcase, Code, Lightbulb, GraduationCap, Gamepad2, Crosshair, ArrowRight } from 'lucide-react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GranolaDivider } from "@/components/granola-divider"

export const metadata: Metadata = {
    title: "Middleman | Traject",
    description: "Your central hub for opportunities and entertainment.",
}

const moveLinks = [
    {
        title: "Internships",
        description: "Find exciting internship opportunities in tech.",
        icon: Briefcase,
        href: "/internships",
    },
    {
        title: "Hackathons",
        description: "Participate in coding challenges and hackathons.",
        icon: Code,
        href: "/hackathons",
    },
    {
        title: "Workshops",
        description: "Enhance your skills with our interactive workshops.",
        icon: Lightbulb,
        href: "/workshops",
    },
    {
        title: "Careers",
        description: "Explore full-time career opportunities in tech.",
        icon: GraduationCap,
        href: "/careers",
    },
]

const laughLinks = [
    {
        title: "Sigma Roulette",
        description: "Try your luck with our fun Sigma Roulette game!",
        icon: Gamepad2,
        href: "/sigma-roulette",
    },
    {
        title: "Center the Div",
        description: "Test your CSS skills by centering the div!",
        icon: Crosshair,
        href: "/center-the-div",
    },
]

export default function MiddlemanPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <Navbar />
            <main className="flex-grow">
                <div className="container max-w-6xl mx-auto px-4 py-24 sm:py-32">
                    <header className="text-center mb-20">
                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Middleman
                        </h1>
                        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            Your central hub for opportunities and entertainment. Discover, learn, and have fun all in one place.
                        </p>
                    </header>
                    <GranolaDivider />

                    <div className="space-y-24">
                        <section>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Make Your Next Move</h2>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {moveLinks.map((link) => (
                                    <Card key={link.title} className="transition-all hover:shadow-lg hover:-translate-y-1">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-3 text-xl">
                                                <link.icon className="w-6 h-6 text-primary" />
                                                {link.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm">{link.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button asChild className="w-full group">
                                                <Link href={link.href}>
                                                    Go to {link.title}
                                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        <GranolaDivider />

                        <section>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Make Your Next Laugh</h2>
                            <div className="grid gap-8 md:grid-cols-2">
                                {laughLinks.map((link) => (
                                    <Card key={link.title} className="transition-all hover:shadow-lg hover:-translate-y-1">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-3 text-xl">
                                                <link.icon className="w-6 h-6 text-primary" />
                                                {link.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm">{link.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button asChild variant="secondary" className="w-full group">
                                                <Link href={link.href}>
                                                    Play {link.title}
                                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

