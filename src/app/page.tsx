import { Hero } from "@/components/hero/Hero"
import { Origins } from "@/components/scenes/Origins"
import { Scale } from "@/components/scenes/Scale"
import { Eras } from "@/components/scenes/Eras"
import { Library } from "@/components/scenes/Library"
import { Silence } from "@/components/scenes/Silence"
import { WhatIsLogos } from "@/components/scenes/WhatIsLogos"
import { Season } from "@/components/scenes/Season"
import { Episodes } from "@/components/scenes/Episodes"
import { Why } from "@/components/scenes/Why"
import { Magnitude } from "@/components/scenes/Magnitude"
import { Benefits } from "@/components/scenes/Benefits"
import { Sources } from "@/components/scenes/Sources"
import { Offer } from "@/components/scenes/Offer"
import { Faq } from "@/components/scenes/Faq"
import { Finale } from "@/components/scenes/Finale"
import { SiteFooter } from "@/components/chrome/SiteFooter"

export default function Home() {
  return (
    <main>
      <Hero />
      <Origins />
      <Scale />
      <Eras />
      <Library />
      <Silence />
      <WhatIsLogos />
      <Season />
      <Episodes />
      <Why />
      <Magnitude />
      <Benefits />
      <Sources />
      <Offer />
      <Faq />
      <Finale />
      <SiteFooter />
    </main>
  )
}
