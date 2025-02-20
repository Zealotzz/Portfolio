import nextConfig from "../../next.config.mjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p className="text-tropicalTeal font-code bg-white">a</p>
        <Link href="https://www.linkedin.com/in/royce-tan-2639a8277/" className="">LinkedIN</Link>
        <img src={`${nextConfig.basePath}/images/PersonalPic.jpg`} className="w-24"/>
      </div>
    </>
  );
}
