import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { opportunities } from "@/lib/opportunities"
import { MapPin, ArrowRight, Users, Zap, Briefcase, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
    const highlightOpportunities = opportunities.slice(0, 3)

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 space-y-32">
                <section className="w-full max-w-6xl mx-auto mt-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        Innovate. Learn. Grow.
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
                        Discover cutting-edge opportunities in tech, explore diverse career paths, and shape your future in the digital world.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <Button asChild size="lg" variant="default">
                            <Link href="/opportunities">
                                Opportunities <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/hackathons">
                                Hackathons <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/workshops">
                                Workshops <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto bg-accent/50 rounded-3xl p-12">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Trusted by 1000+ Users</h2>
                    <div className="flex justify-center items-center mb-8">
                        <div className="flex -space-x-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-16 h-16 rounded-full bg-background border-4 border-accent overflow-hidden">
                                    <Image
                                        src={`https://i.pravatar.cc/100?img=${i + 1}`}
                                        alt={`User ${i + 1}`}
                                        width={64}
                                        height={64}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="ml-6">
                            <p className="text-2xl font-bold">1000+</p>
                            <p className="text-muted-foreground">Happy Users</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-background rounded-xl shadow-lg">
                            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-3xl font-bold mb-2">500+</h3>
                            <p className="text-muted-foreground">Workshops</p>
                        </div>
                        <div className="p-6 bg-background rounded-xl shadow-lg">
                            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-3xl font-bold mb-2">200+</h3>
                            <p className="text-muted-foreground">Hackathons</p>
                        </div>
                        <div className="p-6 bg-background rounded-xl shadow-lg">
                            <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-3xl font-bold mb-2">1000+</h3>
                            <p className="text-muted-foreground">Career Opportunities</p>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold">Featured Opportunities</h2>
                        <Link
                            href="/opportunities"
                            className="text-primary hover:underline flex items-center"
                        >
                            View All <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {highlightOpportunities.map((opp) => (
                            <Link key={opp.id} href={`/opportunities/${opp.id}`} className="block group">
                                <div className="rounded-xl border border-border bg-card backdrop-blur-sm p-8 h-full hover:bg-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                                    <h3 className="text-2xl font-semibold mb-4">{opp.title}</h3>
                                    <p className="text-muted-foreground mb-6">{opp.company}</p>
                                    <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        <span>{opp.location}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto bg-primary text-primary-foreground rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our community of innovators, learners, and future tech leaders. Your next big opportunity is just a click away.
                    </p>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/middleman">
                            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </section>
            </main>
            <Footer />
        </div>
    )
}