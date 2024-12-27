// "use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="pb-16 px-4 min-h-full">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_90%,transparent_100%)]"></div>
      <div className="container mx-auto text-center space-y-4">
        <h2 className=" border px-3 py-1 shadow-lg  bg-300%  rounded-xl inline-block bg-clip-text gradient_a mb-5 text-transparent">🎉 Introducing new FinanceAI</h2>
        <h1 className="text-5xl md:text-8xl lg-[110px] pb-5 gradient-title font-extrabold">
          Master Your Money <br /> with <span className="">AI Insights</span> 
        </h1>
        <p className="text-sm text-gray-500">
          {" "}
          Track, Analyze, Thrive – AI at Your Financial Fingertips. Take control
          of your finances,Track every expense,<br /> optimize every penny With AI
          driving your financial insights, gain the clarity you need to shape a
          brighter future.
        </p>
        <div >
          <Link href="/dashboard">
            <Button size="lg" className="px-10 text-sm gradient_a inline-block bg-transparent ">
              {" "}
              Get Started
            </Button>
          </Link>
        </div>
        {/* <div>
              <div >
                <Image src="/img1.jpeg" width={1200} height={700} alt="Banner iamge" className="rounded-lg shadow-2xl border mx-auto"/>
              </div>*/}
      </div>
    </div>
  );
}
export default HeroSection;
