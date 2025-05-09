import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "@/components/animation";

const Hero = () => {
  return (
    <Fade>
      <section className="min-h-screen flex items-center justify-center flex-col text-center py-10 pt-24"id="section_home" >
        <h1 className="text-4xl sm:text-6xl lg:text-[5.25rem] 2xl:text-[7.5rem] leading-none font-bold w-[12ch] max-w-[90%]">
          Voting that <span className="block">you can trust</span>
        </h1>
        <p className="text-sm text-neutral-400 my-4 md:my-10 w-[75%] md:w-[54ch]">
          Ready to see the new way of voting? Our platform is built on the blockchain technology to ensure that your vote is secure and transparent.
        </p>
        <div className="flex flex-col mt-5 md:mt-0 items-center md:flex-row gap-5">
          <Link
            className="inline-block rounded bg-gradient-to-r primary-button  font-medium text-white  focus:outline-none "
            href="/"
          >
            Get Connected
          </Link>
          {/* <button className="flex items-center gap-3 font-medium">
            <Image
              src="/icons/play.svg"
              alt="Play Icon"
              width={35}
              height={35}
            />{" "}
            Our Story
          </button> */}
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
