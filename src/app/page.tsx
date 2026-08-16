import { ShootingStars } from "@/components/background/shooting-stars"
import { StarParticles } from "@/components/background/star-particles"
import { StarsBackground } from "@/components/background/stars-background"

import HomeContainer from "./_modules/containers/home-container"

export default function Page() {
  return (
    <>
      <StarsBackground maxTwinkleSpeed={300} />
      <StarParticles position="top-right" delay={2.5} />
      <StarParticles position="bottom-left" delay={2.5} />
      <ShootingStars />
      <HomeContainer />
    </>
  )
}
