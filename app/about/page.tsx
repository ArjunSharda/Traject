import Image from 'next/image'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-24">
                <article className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-foreground">About Traject</h1>
                    <div className="space-y-6">
                        <p className="text-foreground">
                            Traject is a platform dedicated to helping young bruzz discover and pursue exciting opportunities in the world of tech, type sh*t. Our mission is to bridge the gap between aspiring tech professionals and the vast array of internships, hackathons, and career paths available in the industry, gyat!
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4 text-foreground">Our Vision</h2>
                        <p className="text-foreground">
                            We envision a world where every young huzz interested in technology has access to the resources, opportunities, and guidance they need to build a successful career, W vision! We provide a sigma database of internships, hackathons, and educational resources, aiming to empower the next generation of tech innovators and leaders.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4 text-foreground">What We Offer</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li className="text-foreground">A curated list of internships from top tech companies, Don Pollo!</li>
                            <li className="text-foreground">Information on upcoming hackathons and coding competitions, type sh*t.</li>
                            <li className="text-foreground">Detailed guides on various career paths in technology, gyat!</li>
                            <li className="text-foreground">Resources for skill development and continuous learning, W resources!</li>
                        </ul>
                        <h2 className="text-2xl font-semibold mt-6 mb-4 text-foreground">Join Our Community</h2>
                        <p className="text-foreground">
                            Traject is a community of like-minded individuals passionate about technology, chat! Whether you&apos;re a student looking for your first internship or a young professional exploring new career opportunities, Traject is here to support your journey, huzz!
                        </p>
                        <p className="text-foreground">
                            Join us today and take the first step towards shaping your future in tech, type sh*t!
                        </p>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Image
                            src="https://preview.redd.it/rate-my-new-hes-just-a-chill-guy-that-doesnt-give-af-v0-loscsv6hcx3e1.png?width=1080&crop=smart&auto=webp&s=d605a13bfd33a0fda6e9c1d29f36508609c764d5"
                            alt="Chill guy for chill vibes"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}

