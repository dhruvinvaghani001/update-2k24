import type { Metadata } from "next";
import { Montserrat as SansFont } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { Navbar } from "@/components/Navbar";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

const sansFont = SansFont({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Updates 2k24",
  description: "From Floppy to Cloud, be a part in this amazing journey!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={sansFont.className}>
        <NextTopLoader
          color="rgb(109, 40, 217)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 0px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <AuthProvider session={session}>
          <UserProvider>
            <Toaster />
            {children}
            <Navbar />
          </UserProvider>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
