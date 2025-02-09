import React from "react";
import { Container } from "..";
import Image from "next/image";
import { Fade } from "../animation";

const InfoBox = () => {
  return (
    <section className="min-h-[900px] flex flex-col items-center justify-center text-center relative">
      <Container>
        <Fade>
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight max-w-4xl mx-auto mb-12">
            A blockchain voting platform that you can trust
          </h3>
        </Fade>

        <Fade>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Ready to see the new way of voting? Our platform is built on the blockchain technology to ensure that your vote is secure and transparent.
          </p>
        </Fade>
      </Container>

      <div className="hidden lg:block absolute lg:-right-[200px] xl:-right-[400px] lg:top-[-800px] xl:top-[-1100px]">
      <div className="lg:w-[1200px] xl:w-[1500px] lg:h-[1800px] xl:h-[2200px] relative z-0">
        <Image
          src="/images/shadow2.png"
          alt="Effect"
          fill
          sizes="(min-width: 1024px) 1200px, (min-width: 1280px) 1500px"
          className="object-contain"
        />
      </div>
    </div>
    </section>
  );
};

export default InfoBox;
