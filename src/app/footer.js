'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import nextConfig from "../../next.config.mjs";

export default function Footer() {
  return (
    <>
      <div id="footer" className="w-full bg-background py-8 px-5 sm:px-9">
        <div className="flex mx-auto max-w-7xl w-full justify-between">
          <div className="">
            <a href="mailto: Roycetwk.w@gmail.com" className="hover:underline">Roycetwk.w@gmail.com</a>
          </div>
          <div className="border-r-2 px-2 text-right">
            <Link href="https://www.linkedin.com/in/royce-tan-2639a8277/">linkedIn</Link>
          </div>
        </div>
      </div>
    </>
  );
}