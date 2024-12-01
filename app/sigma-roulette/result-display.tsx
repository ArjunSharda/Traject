interface ResultDisplayProps {
    result: 'sigma' | 'cap'
    headline: string
    quote: string | null
}

export function ResultDisplay({ result, headline, quote }: ResultDisplayProps) {
    return (
        <section className="w-full max-w-4xl mx-auto">
            <div className="rounded-lg border border-border bg-card backdrop-blur-sm p-8">
                <h2 className="text-3xl font-bold mb-4">
                    {result === 'sigma' ? 'Congratulations, Sigma!' : 'Sorry, that\'s cap!'}
                </h2>
                <p className="text-xl mb-6">&quot;{headline}&quot;</p>
                {quote && <p className="text-muted-foreground text-lg">{quote}</p>}
            </div>
        </section>
    )
}

