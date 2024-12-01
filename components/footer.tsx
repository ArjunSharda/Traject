import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">© 2024 Traject. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

