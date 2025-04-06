import type { Metadata } from "next";
import '@/app/global.css'
import { Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/animation/SmoothScroll";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Votify",
  description:
    "Voting Dapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.className} text-neutral-100`}>
      <body className="bg-black max-w-[1920px] mx-auto overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
