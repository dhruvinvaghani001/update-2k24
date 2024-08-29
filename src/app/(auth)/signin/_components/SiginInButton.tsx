"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import googleLogo from "@/assets/google-icon.svg";

const SiginInButton = () => {
  const handleSignIn = async () => {
    const user = await signIn("google", { callbackUrl: "/" });
  };
  return (
    <Button
      type="submit"
      onClick={handleSignIn}
      className="w-full flex gap-4 items-center"
    >
      <Image src={googleLogo} alt={"Google logo"} width={20} height={20} />
      Register with Google
    </Button>
  );
};

export default SiginInButton;
