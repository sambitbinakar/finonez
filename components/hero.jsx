 "use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

function HeroSection() {

  const imageRef=useRef()

  useEffect(()=>{
    const imageElement = imageRef.current;
    


    const handleScroll=()=>{
      const scrollPosition = window.scrollY;
      const scrollThreshold =100;

      if(scrollPosition>scrollThreshold){
        imageElement.classList.add("scrolled");
      }else{
        imageElement.classList.remove("scrolled");
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll)
  }, [])
  return (
    <div className="pb-16 px-4 min-h-full">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_100%_at_60%_0%,#000_100%,transparent_100%)]"></div>
      <div className="container mx-auto text-center space-y-4">
        <h2 className=" border px-3 py-1 shadow-lg  bg-300%  rounded-xl inline-block bg-clip-text gradient_a mb-5 text-transparent">
          🎉 Introducing new FinanceAI
        </h2>
        <h1 className="text-5xl md:text-8xl lg-[110px] pb-5 gradient-title font-extrabold">
          Master Your Money <br /> with <span className="">AI Insights</span>
        </h1>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          {" "}
          Track, Analyze, Thrive – AI at Your Financial Fingertips. Take control
          of your finances,Track every expense,
          optimize every penny With AI driving your financial insights,
          gain the clarity you need to shape a brighter future.
        </p>
        <div className="mt-8 ">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-10 text-sm gradient_a inline-block bg-transparent "
            >
              {" "}
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <div className=" py-10 mt-5 hero-image-wrapper">
        <div ref={imageRef} className="hero-image">
        <Image
          src="/img2.png"
          width={950}
          height={600}
          alt="Banner iamge"
          className="rounded-xl shadow-2xl mx-auto"
        /></div>
      </div>
    </div>
  );
}
export default HeroSection;
