'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ProjectSlideShow from "./projects_slideshow";

export default function Home() {
  const [navState, setNavState] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      setNavState(window.scrollY > 50 ? 0 : 1);
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll();
  }, [])

  return (
    <>
      <Navbar pageIndex={0} navState={navState} />
      <div className="relative w-full h-screen">
        <div className="absolute size-full opacity-80 -z-20"> 
          <ProjectSlideShow/>
        </div>
        <div className="bg-foreground w-1/2 h-full pl-5 sm:pl-9 z-10">
          <div className="ml-auto max-w-[40rem] size-full content-center space-y-4 text-background">
            <p className="">Hi, I'm</p>
            <p className="pt-10 text-5xl">Royce Tan</p>
            <p className="">Game Developer/Front-end Developer</p>
          </div>
        </div>
      </div>
      <div className="">

      </div>
      <Footer />
    </>
  );
}
