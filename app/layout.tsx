import type { Metadata } from "next";
import { Dancing_Script, Playfair_Display } from 'next/font/google'
import '@/styles/animations.css'
import "@/styles/globals.css";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Providers } from "./providers";

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})


export const metadata: Metadata = {
  title: "Wedding Invitition",
  description: "Wedding Invitition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${playfairDisplay.variable} text-black`}
      >
        <Providers>
          <GlobalStyles />
          <div className="bg-white">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}


