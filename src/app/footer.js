'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import nextConfig from "../../next.config.mjs";

export default function Footer({ pageIndex = 0}) {
  return (
    <>
      <div id="footer" className="w-full bg-background py-12 px-5 sm:px-9">
        <div className="flex mx-auto max-w-7xl w-full justify-between">
          <div className="px-2">
            <p className="text-lg font-bold">Contacts</p>
            <p className="">+65 9825 5156</p>
            <p className="">Roycetwk@gmail.com</p>
          </div>
          <div className="border-r-2 px-2 text-right">
            <Link href="https://www.linkedin.com/in/royce-tan-2639a8277/">linkedIn</Link>
            <div></div>
            <Link href="https://www.linkedin.com/in/royce-tan-2639a8277/">Github</Link>
          </div>
        </div>
      </div>
    </>
  );
}