'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ProjectSlideShow from "./projects_slideshow";
import Tab from "./icon_tab";

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
          <ProjectSlideShow />
        </div>
        <div className="bg-foreground w-1/2 h-full pl-5 sm:pl-9 z-10">
          <div className="ml-auto max-w-[40rem] size-full content-center space-y-4 text-background">
            <p className="">Hi, I'm</p>
            <p className="pt-5 text-5xl">Royce Tan</p>
            <p className="">Game Developer / Front-end Developer</p>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-9 py-12">
        <div className="mx-auto max-w-7xl w-full">
          <p className="text-3xl">About Me</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="mt-16 justify-items-center">
          <p className="w-min border-4 border-foreground p-3 text-3xl text-center">Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/unity.png`} text={"Unity"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/ue.png`} text={"Unreal Engine 5"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/cpp.png`} text={"C++"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/cs.png`} text={"C#"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/git.png`} text={"Git"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/js.png`} text={"Javascript"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/css.png`} text={"CSS"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/html5.png`} text={"HTML5"} />
            </div>
            <div className="p-10">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/react.png`} text={"React"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
