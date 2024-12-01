import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold">Youth Opportunities</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/opportunities">Opportunities</Link>
                    <Link href="/careers">Career Paths</Link>
                    <Link href="/about">About</Link>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

