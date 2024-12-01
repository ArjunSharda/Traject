'use client'

import { useState, useEffect } from 'react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RouletteWheel } from "./roulette-wheel"
import { ResultDisplay } from "./result-display"

const sigmaQuotes = [
    "You're not just grinding, you're redefining the grindset.",
    "While others sleep, you're busy conquering empires in your mind.",
    "Your LinkedIn headline is so sigma, it makes CEOs question their career choices.",
]

const capQuotes = [
    "Your LinkedIn headline is more cap than a graduation ceremony.",
    "You're not a sigma, you're a ligma.",
    "Your grindset is so weak, even participation trophies feel sorry for you.",
]

export default function SigmaRoulette() {
    const [headline, setHeadline] = useState('')
    const [submittedHeadline, setSubmittedHeadline] = useState('')
    const [isSpinning, setIsSpinning] = useState(false)
    const [result, setResult] = useState<{ type: 'sigma' | 'cap' | null; quote: string | null }>({ type: null, quote: null })
    const [cards, setCards] = useState<('sigma' | 'cap')[]>([])
    const [isClient, setIsClient] = useState(false)

    const generateCards = () => {
        return Array.from({ length: 10 }, () => Math.random() > 0.5 ? 'sigma' : 'cap')
    }

    useEffect(() => {
        setIsClient(true)
        setCards(generateCards())
    }, [])

    const handleSpin = () => {
        setIsSpinning(true)
        setResult({ type: null, quote: null })
        setSubmittedHeadline(headline)
        const newCards = generateCards()
        setCards(newCards)
        setTimeout(() => {
            setIsSpinning(false)
            const resultType = newCards[4]
            const quotes = resultType === 'sigma' ? sigmaQuotes : capQuotes
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
            setResult({ type: resultType, quote: randomQuote })
        }, 5000)
    }

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 space-y-16">
                <section className="w-full max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        Sigma Roulette
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
                        Enter your LinkedIn headline and spin the roulette to see if you&apos;re a sigma or cap.
                    </p>
                    {isClient && (
                        <div className="flex flex-col items-center space-y-4">
                            <Input
                                type="text"
                                placeholder="Enter your LinkedIn headline"
                                className="max-w-md w-full"
                                value={headline}
                                onChange={(e) => setHeadline(e.target.value)}
                                disabled={isSpinning}
                            />
                            <Button
                                onClick={handleSpin}
                                disabled={!headline || isSpinning}
                                className="px-8 py-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-lg font-semibold"
                            >
                                Spin the Roulette
                            </Button>
                        </div>
                    )}
                </section>

                {isClient && (
                    <section className="w-full max-w-6xl mx-auto overflow-hidden">
                        <RouletteWheel cards={cards} isSpinning={isSpinning} result={result.type} />
                    </section>
                )}

                {isClient && result.type && (
                    <ResultDisplay result={result.type} headline={submittedHeadline} quote={result.quote} />
                )}
            </main>
            <Footer />
        </div>
    )
}

