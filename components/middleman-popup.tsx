import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Briefcase, Code, Lightbulb, GraduationCap, Gamepad2, Crosshair, ArrowRight } from 'lucide-react'

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

export function MiddlemanSection() {
    return (
        <section className="w-full max-w-6xl mx-auto bg-gradient-to-br from-primary to-purple-600 text-primary-foreground rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-center">
                Join our community of innovators, learners, and future tech leaders. Your next big opportunity is just a click away.
            </p>

            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">Make Your Next Move</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {moveLinks.map((link) => (
                            <Card key={link.title} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 transition-all hover:bg-primary-foreground/20">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-primary-foreground">
                                        <link.icon className="w-6 h-6" />
                                        {link.title}
                                    </CardTitle>
                                    <CardDescription className="text-primary-foreground/80">{link.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild variant="secondary" className="w-full">
                                        <Link href={link.href}>
                                            Go to {link.title}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-center">Make Your Next Laugh</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {laughLinks.map((link) => (
                            <Card key={link.title} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 transition-all hover:bg-primary-foreground/20">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-primary-foreground">
                                        <link.icon className="w-6 h-6" />
                                        {link.title}
                                    </CardTitle>
                                    <CardDescription className="text-primary-foreground/80">{link.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild variant="secondary" className="w-full">
                                        <Link href={link.href}>
                                            Play {link.title}
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

