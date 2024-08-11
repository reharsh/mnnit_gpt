import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import StarsCanvas from "@/components/main/StarBackground";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <body
      suppressHydrationWarning
      className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
    >
      <StarsCanvas />
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <Encryption />
          <Projects />
        </div>
      </main>
      <Footer />
    </body>
  );
}
