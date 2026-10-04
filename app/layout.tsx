import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Revizit — La mode, en héritage', description: 'Revizit, une sélection singulière de mode africaine contemporaine et de créations artisanales ivoiriennes.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html> }
