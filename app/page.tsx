import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import Link from "next/link"
import Image from "next/image"
import { opportunities } from "@/lib/opportunities"
import { MapPin } from 'lucide-react'

export default function Home() {
  const highlightOpportunities = opportunities.slice(0, 3)

  return (
      <div className="min-h-screen flex flex-col bg-black text-white">
        <ParticleBackground />
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Innovate. Learn. Grow.
          </h1>
          <p className="text-white/60 max-w-2xl mb-12 text-lg">
            Discover opportunities in tech, explore career paths, and shape your future.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
                href="/opportunities?type=internship"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              internships
            </Link>
            <Link
                href="/opportunities?type=hackathon"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              hackathons
            </Link>
            <Link
                href="/careers"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              careers
            </Link>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Trusted by 1000+ users</h2>
            <div className="flex justify-center -space-x-4">
              {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white/20 border-2 border-black overflow-hidden">
                    <Image
                        src={`https://i.pravatar.cc/100?img=${i + 1}`}
                        alt={`User ${i + 1}`}
                        width={48}
                        height={48}
                    />
                  </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-8">Featured Opportunities</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlightOpportunities.map((opp) => (
                  <Link key={opp.id} href={`/opportunities/${opp.id}`} className="block group">
                    <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-full hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-semibold mb-2">{opp.title}</h3>
                      <p className="text-white/60 mb-4">{opp.company}</p>
                      <div className="flex items-center text-white/40 group-hover:text-white/60 transition-colors">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{opp.location}</span>
                      </div>
                    </div>
                  </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
  )
}
