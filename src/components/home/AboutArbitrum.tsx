import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "..";
import { Reveal } from "../animation";

const AboutArbitrum = () => {
  return (
    <section className="min-h-[768px] flex items-center relative py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[600px] mx-auto lg:mx-0 p-8">
              <Image
                src="/images/about-arbitrum.png"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl shadow-2xl m-4"
                alt="About Arbitrum Figure"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Our Voting Architecture
                <br /> is built on
                <br /> blockchain technology
              </h1>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                We are building a decentralized voting platform that is secure, transparent, and scalable. Our platform
                is built on the blockchain technology to ensure that your vote is secure and transparent.
              </p>
              <Link
                className="inline-block rounded bg-gradient-to-r primary-button font-medium text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl"
                href="/"
              >
                Get Connected
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
      <div className="absolute left-[-100px] lg:left-[-200px] bottom-[-250px] lg:bottom-[-100px] -z-10 translate-x-[-30px] lg:translate-x-[-90px] translate-y-[40px] lg:translate-y-[10px]">
  <div className="w-[900px] lg:w-[1100px] h-[900px] lg:h-[1200px] relative">
    <Image
      src="/images/arbitrum-object.png"
      alt="Shadow Effect"
      width={1100}  // Increased width
      height={1200} // Increased height
      objectFit="cover" // Ensures stretching works properly
    />
  </div>
</div>

    </section>
  );
};

export default AboutArbitrum;
