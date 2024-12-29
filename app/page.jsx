import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40 ">
      <HeroSection />
      <section className=" py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div className="text-center" key={index}>
                <div className="text-4xl font-bold text-[#f69642] mb-2">
                  {statsData.value}
                </div>
                <div className="text-gray-500 text-sm font-semibold">
                  {statsData.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everythings you need to manage your Finance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-transparent text-white hover:gradient hover:text-black hover:scale-105"
              >
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works For You ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-transparent flex items-center flex-col border rounded-xl gap-3"
              >
                <div className="w-16 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold ">{step.title}</h3>
                <p className="text-gray-400 text-xs text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-16 py-10">
        <div className="py-14 border-t ">
          <div className="container mx-auto px-4 text-center space-y-5">
            <h2 className="text-3xl font-bold text-center mb-4">
              Ready to take Control of Your Finances With  <span className="text-transparent bg-300% gradient_a bg-clip-text font-extrabold text-4xl">FINONEZ</span>
            </h2>
            <p className="pb-8 text-gray-600 tracking-tighter">
              Join thousands of users who are already managing their finance
              smarter 
            </p>
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
      </section>
    </div>
  );
}
