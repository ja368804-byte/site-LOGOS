import type { Metadata } from "next"
import { EB_Garamond, Geist, IBM_Plex_Mono, Newsreader } from "next/font/google"
import { Nav } from "@/components/chrome/Nav"
import { Preloader } from "@/components/chrome/Preloader"
import { MotionRoot } from "@/components/chrome/MotionRoot"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-newsreader",
  axes: ["opsz"],
})

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext", "greek"],
  display: "swap",
  variable: "--font-eb-garamond",
})

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "LOGOS — A razão por trás da fé",
  description: "Uma produção original da LOGOS. História das religiões como fenômeno histórico, cultural e humano.",
  icons: { icon: "/brand/logos-mark.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${newsreader.variable} ${geist.variable} ${plex.variable} ${garamond.variable} is-preloading`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var q=new URLSearchParams(location.search).get("motion");var r=q==="0"||(q!=="1"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);var e=document.documentElement;e.classList.toggle("motion-reduced",r);e.classList.toggle("has-cinematic",!r);}catch(err){}})();`,
          }}
        />
      </head>
      <body className="bg-noite font-sans text-osso antialiased" data-field="noite">
        <noscript>
          <style>{`.preloader{display:none!important}`}</style>
        </noscript>
        <a href="#hero" className="skip-to-content">
          Ir ao início
        </a>
        <MotionRoot>
          <Preloader />
          <Nav />
          {children}
        </MotionRoot>
      </body>
    </html>
  )
}
