'use client'

import { motion } from 'framer-motion'

interface SpinningCardProps {
    type: 'sigma' | 'cap'
    isSpinning: boolean
}

export function SpinningCard({ type, isSpinning }: SpinningCardProps) {
    return (
        <motion.div
            className="w-48 h-64 rounded-lg border border-border bg-card backdrop-blur-sm flex items-center justify-center text-4xl font-bold"
            animate={{
                rotateY: isSpinning ? 360 : 0,
                scale: isSpinning ? 1.1 : 1,
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: isSpinning ? Infinity : 0,
            }}
        >
            {type === 'sigma' ? 'Σ' : 'CAP'}
        </motion.div>
    )
}

