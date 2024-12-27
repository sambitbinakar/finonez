import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finonez",
  description: "Finance expense in Platform ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` ${inter.className } bg-black text-white`}>
       
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-blue-100 py-12 ">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p> copyright @ Sambit Binakar</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
