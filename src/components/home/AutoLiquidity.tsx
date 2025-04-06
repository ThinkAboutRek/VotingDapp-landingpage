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
                  Ethereum Blockchain
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                The system leverages Ethreum, a Layer-1 Blockchain network, to ensure the integrity and security of the voting process. By utilizing Ethereum decentralized architecture, the system guarantees that all votes are recorded on a tamper-proof ledger, making it virtually impossible to alter or manipulate the results. This transparency fosters trust among voters and stakeholders, as they can independently verify the authenticity of the election outcomes.
                  <br />
                  The Ethereum blockchain also enables the implementation of smart contracts, which automate various aspects of the voting process, such as vote counting and result tabulation. This automation reduces the risk of human error and streamlines the overall voting experience for participants.
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
                  SumSub KYC
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                  The system employs SumSub, a leading KYC (Know Your Customer) solution, to verify the identities of voters. This ensures that only eligible individuals can participate in the voting process, preventing fraud and ensuring compliance with regulatory requirements. By integrating SumSub's robust identity verification technology, the system enhances the overall security and legitimacy of the voting process.
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
