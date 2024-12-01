"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import confetti from 'canvas-confetti'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const memes = [
    "You've lost aura",
    "New text from dad: Get back home NOW",
    "That's not sigma",
    "Brainrot is far better than your centering skills",
    "You're NOT them.",
    "The sigmas are disappointed",
    "Erm what the sigma was that",
    "You did worse than a intern",
]

export default function CenterDivGame() {
    const [horizontalPosition, setHorizontalPosition] = useState(0)
    const [verticalPosition, setVerticalPosition] = useState(0)
    const [isCentered, setIsCentered] = useState(false)
    const [showMeme, setShowMeme] = useState(false)
    const [currentMeme, setCurrentMeme] = useState('')
    const [showCongrats, setShowCongrats] = useState(false)

    useEffect(() => {
        const horizontalCentered = Math.abs(horizontalPosition - 50) < 2
        const verticalCentered = Math.abs(verticalPosition - 50) < 2
        setIsCentered(horizontalCentered && verticalCentered)
        setShowCongrats(false)
    }, [horizontalPosition, verticalPosition])

    const handleCheck = () => {
        if (isCentered) {
            setShowCongrats(true)
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })
        } else {
            setShowMeme(true)
            setCurrentMeme(memes[Math.floor(Math.random() * memes.length)])
            setTimeout(() => setShowMeme(false), 3000)
        }
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center p-4 mt-16">
                    <Card className="w-full max-w-2xl">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-center">Can you center the div?</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="relative w-full h-64 border-2 border-primary rounded-lg overflow-hidden bg-secondary/20">
                                <div
                                    className="absolute w-16 h-16 bg-primary rounded-md transition-all duration-300 flex items-center justify-center text-primary-foreground font-bold shadow-lg"
                                    style={{ left: `${horizontalPosition}%`, top: `${verticalPosition}%`, transform: 'translate(-50%, -50%)' }}
                                    aria-label="Movable div"
                                >
                                    DIV
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="horizontal-slider">Horizontal Position</Label>
                                    <Slider
                                        id="horizontal-slider"
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={[horizontalPosition]}
                                        onValueChange={(value) => setHorizontalPosition(value[0])}
                                        aria-label="Adjust horizontal position"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="vertical-slider">Vertical Position</Label>
                                    <Slider
                                        id="vertical-slider"
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={[verticalPosition]}
                                        onValueChange={(value) => setVerticalPosition(value[0])}
                                        aria-label="Adjust vertical position"
                                    />
                                </div>
                            </div>
                            <Button onClick={handleCheck} size="lg" className="w-full">
                                Check Centering
                            </Button>
                            {showMeme && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Nice try, but...</AlertTitle>
                                    <AlertDescription>{currentMeme}</AlertDescription>
                                </Alert>
                            )}
                            {showCongrats && (
                                <Alert>
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                    <AlertTitle>Congratulations!</AlertTitle>
                                    <AlertDescription>New text from mom: I&apos;m so proud of you</AlertDescription>
                                </Alert>
                            )}
                        </CardContent>
                    </Card>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

