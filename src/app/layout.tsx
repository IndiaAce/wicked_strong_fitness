import type { Metadata } from "next"
import { Playfair_Display, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/SiteHeader"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wicked Strong Fitness",
  description:
    "Wicked Strong offers dynamic online fitness classes, on-demand workouts, and a supportive member community.",
  icons: {
    icon: "/brand/ws-logo-bw.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${playfair.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
