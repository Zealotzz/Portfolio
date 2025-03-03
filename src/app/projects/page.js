'use client'

import nextConfig from "../../../next.config.mjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../navbar";

export default function Projects() {
  return (
    <>
      <Navbar pageIndex={1} />
      <p className="mt-24 text-primary text-4xl">Projects</p>
    </>
  );
}
