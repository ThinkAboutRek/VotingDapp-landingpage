import Image from "next/image";
import React from "react";
import { Container } from "..";
import { Reveal } from "../animation";

const AutoLiquidity = () => {
  return (
    <>
      <section className="min-h-[768px] flex items-center relative pt-10" id="section_liquidity" >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8 w-full">
            <Reveal>
              <>
                <p className="text-sm text-[#C792FF] mb-4">Decentralized Voting</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">
                  Polygon Blockchain
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                The system leverages Polygon, a Layer-2 Ethereum scaling solution, to minimize transaction costs while ensuring high throughput. Polygon&apos;s low fees make it cost-effective for large-scale elections, while its scalable architecture supports millions of transactions without compromising speed or reliability. This ensures the system remains efficient and accessible, even during high voter turnout, setting a new standard for modern electoral processes.
                  <br />
                  <br />
                  Traditional voting systems face significant challenges, including fraud, lack of transparency, and inefficiencies that undermine trust in democratic processes. This project addresses these issues by leveraging blockchain technology on the Polygon network to create a secure, transparent, and scalable decentralized voting system. By integrating Civic for robust identity verification and Witnet Oracle for secure off-chain data validation, the system ensures voter eligibility, tamper-proof records, and cost efficiency, paving the way for modernized and trustworthy elections.
                  <br />
                  
                </p>
              </>
            </Reveal>
            <div className="row-start-1 lg:row-start-auto ">
              <Reveal right>
                <div className="relative aspect-square mx-auto">
                  <Image
                    src="/images/auto-liquidity-1.png"
                    objectFit="contain"
                    className="p-0.5 rounded-3xl"
                    layout="fill"
                    alt="About Arbitrum Figure"
                  ></Image>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
        <div className="absolute left-0 top-[25%]">
          <div className="w-[400px] h-[800px] relative z-0 max-w-[90vw]">
            <Image
              src="/images/auto-liquidity-object-1.png"
              alt="Shadow Effect"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-[10%] -translate-x-1/2">
          <Image src="/icons/star.svg" alt="Star Icon" width={40} height={40} />
        </div>
      </section>
      <section className="min-h-[768px] flex items-center relative pb-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8 w-full">
            <div className="row-start-1 lg:row-start-auto ">
              <Reveal>
                <div className="relative aspect-square mx-auto">
                  <Image
                    src="/images/auto-liquidity-2.png"
                    objectFit="contain"
                    className="p-0.5 rounded-3xl"
                    layout="fill"
                    alt="About Arbitrum Figure"
                  ></Image>
                </div>
              </Reveal>
            </div>
            <Reveal right>
              <>
                <p className="text-sm text-[#3EFF8B] mb-4">Decentralized Voting</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">
                  Civic  <br /> Pass
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                Civic&apos;s advanced identity verification technology ensures that only eligible voters can participate in the election process. By securely authenticating voter identities and linking trusted wallets to the system, Civic prevents fraudulent activities such as duplicate or unauthorized voting. This robust authentication mechanism enhances security and builds trust in the decentralized voting platform.
                  <br />
                 
                </p>
              </>
            </Reveal>
          </div>
        </Container>
        <div className="absolute right-0 top-[30%]">
          <div className="w-[400px] h-[800px] relative z-0 max-w-[90vw] translate-x-1/2">
            <Image
              src="/images/auto-liquidity-object-2.png"
              alt="Shadow Effect"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AutoLiquidity;
