'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import SlideShow from "./slideshow";
import Tab from "./icon_tab";
import ProjectsShowcase from "./projects_showcase";

export default function Home() {
  const [navState, setNavState] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      setNavState(window.scrollY > 50 ? 0 : 1);
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll();
  }, [])

  const path = `${process.env.BASE_PATH}/images`;
  const homeImages = [
    `${path}/projects/Bullet.Hell/b.h3.jpg`,
    `${path}/projects/Bullet.Hell/b.h2.jpg`,
    `${path}/projects/Bullet.Hell/b.h1.jpg`,
  ];


  return (
    <>
      <Navbar pageIndex={0} navState={navState} />
      <div className="relative w-full h-screen">
        <div className="absolute size-full -z-20">
          <SlideShow images={homeImages} />
        </div>
        <div className="bg-foreground w-1/2 h-full pl-5 sm:pl-9 z-10">
          <div className="ml-auto max-w-[40rem] size-full content-center space-y-4 text-background">
            <p className="">Hi, I'm</p>
            <p className="pt-5 text-5xl">Royce Tan</p>
            <p className="">Game Developer / Front-end Developer</p>
          </div>
        </div>
      </div>
      <div className="mt-16 px-5 sm:px-9 py-12">
        <div className="mx-auto max-w-7xl w-full">
          <p className="text-3xl">About Me</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div id="skills" className="mt-16 mx-auto max-w-7xl w-full justify-items-center">
          <p className="w-min border-4 border-foreground p-3 text-3xl text-center">Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/unity.png`} text={"Unity"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/ue.png`} text={"Unreal Engine 5"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/cpp.png`} text={"C++"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/cs.png`} text={"C#"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/git.png`} text={"Git"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/js.png`} text={"Javascript"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/css.png`} text={"CSS"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/html5.png`} text={"HTML5"} />
            </div>
            <div className="p-10 overflow-clip">
              <Tab imgSrc={`${process.env.BASE_PATH}/images/icons/react.png`} text={"React"} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="">
          <div className="mb-10 justify-items-center">
            <p className="w-min border-4 border-foreground p-3 text-3xl text-center">Projects</p>
          </div>

          <div className="">
            <ProjectsShowcase />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
