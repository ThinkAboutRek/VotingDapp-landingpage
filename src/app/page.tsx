"use client";
import {
  AboutArbitrum,
  AutoLiquidity,
  Cryptomining,
  Cards,
  Faq,
  Footer,
  Header,
  Hero,
  InfoBox,
  Seven,
  Upcoming,
} from "@/components";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <>
        <div className="relative w-full h-screen overflow-hidden">
          <Hero />
          <Image
            src="/images/bg/hero.png"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt="Hero Background"
            className="-z-10"
          />
        </div>
        <div className="overflow-hidden">
          <Cards />
          <Cryptomining />
          <AboutArbitrum />
          <div className="relative">
            <InfoBox />
          </div>

          <Upcoming />
          <Seven />
          <AutoLiquidity />
          <div className="relative">
          <Faq />
            <Image
              src="/images/circles.png"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt="Hero Background"
              className="-z-10"
            /> 
          <Footer />
        </div>
        </div>
      </>
    </>
  );
}
