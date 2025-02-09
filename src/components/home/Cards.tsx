'use client';

import React, { useEffect, useRef } from "react"
import { Card } from ".."
import Container from "../layout/Container"
import Image from "next/image"
import { useAnimation, useInView, motion } from "framer-motion"
import { ArrowLeftRight, Wallet, WalletCards } from 'lucide-react'

const cards = [
  {
    icon: ArrowLeftRight,
    title: "Register",
    text: "Register to vote in the upcoming election",
    href: "#",
    color: "#b982ff",
  },
  {
    icon: WalletCards,
    title: "Vote",
    text: "Vote for your favorite candidate",
    href: "#",
    color: "#b982ff",
  },
  {
    icon: Wallet,
    title: "View",
    text: "View the results of the election",
    href: "#",
    color: "#b982ff",
  },
]

const Cards = () => {
  const showRef = useRef(null)
  const isInView = useInView(showRef, { amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate")
    } else {
      mainControls.start("initial")
    }
  }, [isInView, mainControls])

  const animVars = {
    initial: (index: number) => ({
      opacity: 0,
      scale: 0.85,
      transition: {
        delay: 0,
        duration: 0.25,
      },
    }),
    animate: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.25 * index,
        duration: 0.25,
      },
    }),
  }

  return (
    <section
    className="min-h-[768px] flex items-center py-10 relative bg-cover bg-center"
    style={{ backgroundImage: "url('/images/bg/cardsbg.png')" }}
    >
      <Container>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold pb-16 text-white">
          How it Works
        </h1>
        <div
          ref={showRef}
          className="grid lg:grid-cols-3 grid-cols-1 gap-4 relative z-10 mb-16"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={animVars}
              initial="initial"
              animate={mainControls}
              custom={index}
            >
              <div className="bg-[#1a1b23] rounded-lg p-6 border border-gray-800">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                    <card.icon className="h-6 w-6 text-[#b982ff]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{card.text}</p>
                  <a
                    href={card.href}
                    className="text-[#b982ff] hover:text-[#b982ff]/80 inline-flex items-center group"
                  >
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      <div className="absolute -right-[350px] -bottom-[100px]">
             </div>
    </section>
  )
}

export default Cards
