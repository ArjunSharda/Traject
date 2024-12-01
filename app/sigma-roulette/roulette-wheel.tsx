'use client'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface RouletteWheelProps {
    cards: ('sigma' | 'cap')[]
    isSpinning: boolean
    result: 'sigma' | 'cap' | null
}

export function RouletteWheel({ cards, isSpinning, result }: RouletteWheelProps) {
    const controls = useAnimation()

    useEffect(() => {
        if (isSpinning) {
            controls.start({
                x: [-1920, 0],
                transition: {
                    duration: 5,
                    ease: (t) => {
                        // Custom easing function for gradual slowdown
                        return 1 - Math.pow(1 - t, 4)
                    },
                },
            })
        } else {
            controls.start({
                x: [-1920, 0],
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                },
            })
        }
    }, [isSpinning, controls])

    return (
        <div className="relative h-64 w-full">
            <motion.div
                className="flex absolute left-0 top-0 bottom-0"
                animate={controls}
            >
                {[...cards, ...cards].map((card, index) => (
                    <div
                        key={index}
                        className="w-48 h-64 mx-2 rounded-lg border border-border bg-card backdrop-blur-sm flex items-center justify-center text-4xl font-bold"
                    >
                        ?
                    </div>
                ))}
            </motion.div>
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary" style={{ transform: 'translateX(-50%)' }} />
            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="absolute left-1/2 top-1/2 w-64 h-80 -ml-32 -mt-40 bg-card border-4 border-primary rounded-xl flex items-center justify-center text-6xl font-bold z-10"
                    >
                        {result === 'sigma' ? 'Σ' : 'CAP'}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

