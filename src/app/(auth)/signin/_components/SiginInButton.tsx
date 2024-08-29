"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import googleLogo from "@/assets/google-icon.svg";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SiginInButton = ({
  className,
  text,
  buttonVariant,
}: {
  className?: string;
  text: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSignIn = async () => {
    const user = await signIn("google", { callbackUrl: callbackUrl });
  };
  return (
    <Button
      type="submit"
      onClick={handleSignIn}
      variant={buttonVariant || "default"}
      className={cn(className, "flex gap-4 items-center")}
    >
      <Image src={googleLogo} alt={"Google logo"} width={20} height={20} />
      {text}
    </Button>
  );
};

export default SiginInButton;
