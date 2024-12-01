'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ModeToggle } from './mode-toggle'
import { Menu, X } from 'lucide-react'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 dark:bg-background/50 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-foreground font-bold text-xl">
                    Traject
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors">
                        Opportunities
                    </Link>
                    <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                        Careers
                    </Link>
                    <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                    </Link>
                    <ModeToggle />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-foreground">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/opportunities" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Opportunities
                        </Link>
                        <Link href="/careers" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Careers
                        </Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            About
                        </Link>
                    </div>
                    <div className="px-4 py-3">
                        <ModeToggle />
                    </div>
                </div>
            )}
        </nav>
    )
}

