'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar({ pageIndex = 0, navState = 0 }) {

  useEffect(() => {
    const navbar = document.querySelector("#navbar");

    switch (navState) {
      case 0:
        navbar.classList.remove("opacity-0");
        break;
      case 1:
        navbar.classList.add("opacity-0");
        break;
      default:

    }
  }, [navState])

  return (
    <>
      <div id="navbar" className="fixed top-0 w-full bg-background px-5 sm:px-9 py-2 opacity-0 transition-opacity duration-200 z-50">
        <div className="flex mx-auto max-w-7xl w-full justify-between">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Logo size={24} logoColor="white" />
              <p className="text-lg">Royce's Portfolio</p>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className={`text-lg ${pageIndex == 0 ? "underline" : ""}`}>About</Link>
            <Link href="/projects" className={`text-lg ${pageIndex == 1 ? "underline" : ""}`}>Projects</Link>
            <p className={`text-lg ${pageIndex == 2 ? "underline" : ""}`}>Certificates</p>
          </div>
        </div>
      </div>
    </>
  );
}