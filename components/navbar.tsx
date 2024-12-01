import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 dark:bg-background/50 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-foreground font-bold text-xl">
                    Traject
                </Link>
                <div className="flex items-center space-x-8">
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
            </div>
        </nav>
    )
}

