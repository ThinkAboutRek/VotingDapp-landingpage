import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "@/components/animation";

const Cryptomining = () => {
  return (
    <Fade>
      <section
        className="w-full min-h-[562px] flex items-center justify-center flex-col text-center py-10 px-4"
        id="section_cryptomining"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          A decentralized voting platform that you can trust
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-neutral-400 my-4 md:my-10 max-w-[90%] md:max-w-[54ch]">
          Ready to see the new way of voting? Our platform is built on the blockchain technology to ensure that your vote is secure and transparent.
        </p>
        <div className="flex flex-col mt-5 md:mt-0 items-center md:flex-row gap-3 md:gap-5">
          <Link
            className="inline-block rounded bg-gradient-to-r primary-button font-medium text-white px-6 py-3 text-sm sm:text-base"
            href="/"
          >
            Get Connected
          </Link>
        </div>
        <div className="absolute right-[-400px] md:right-[-400px] bottom-[-250px] md:bottom-[-300px] -z-10">
          <div className="w-[800px] md:w-[1000px] h-auto">
            <Image
              src="/images/Looper.png"
              alt="Looper Effect"
              width={1000} 
              height={1000} 
              objectFit="cover" 
            />
          </div>
        </div>

      </section>
    </Fade>
  );
};

export default Cryptomining;
