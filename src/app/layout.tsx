import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { Navbar } from "@/components/Navbar";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Updates 2k24",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  // console.log("this if from server");
  // console.log(session);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <UserProvider>
            <Toaster />
            {children}
            <Navbar />
          </UserProvider>
        </AuthProvider>
        {/* <Button className="fixed right-12 top-12">Login/Register</Button> */}
      </body>
    </html>
  );
}
