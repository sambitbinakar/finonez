import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, Moon, PenBox, Sun } from "lucide-react";

function Header() {
  return (
    <div className="fixed top-0 w-full backdrop-filter backdrop-blur-sm bg-opacity-50 z-50 border-b px-3">
      <nav className=" container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo-dark.png"}
            alt="finonez logo"
            height={60}
            width={150}
            className="h-12 object-cover"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"./dashboard"}
              className="text-gray-700 hover:text-blue-700 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href={"./transaction/create"}>
              <Button className="flex items-center">
                <PenBox size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="font-bold text-black">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements:{
                avatarBox:"w-10 h-10"
              }
            }}/>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
}

export default Header;
