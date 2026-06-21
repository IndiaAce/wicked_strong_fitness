import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@/styles/ws-design.css"
import { InviteRedirect } from "@/components/InviteRedirect"
import { SiteHeader } from "@/components/SiteHeader"
import { ProgramProvider } from "@/components/program/ProgramProvider"
import { Splash } from "@/components/program/Splash"

const inter = Inter({
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        <ProgramProvider>
          <InviteRedirect />
          <Splash />
          <SiteHeader />
          {children}
        </ProgramProvider>
      </body>
    </html>
  )
}
