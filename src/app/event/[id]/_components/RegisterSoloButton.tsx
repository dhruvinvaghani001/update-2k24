"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

type Props = {};

const RegisterSoloButton = ({ eventId }: { eventId: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const handleSoloRegistration = async () => {
    if (status == "authenticated") {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `/api/event/${eventId}/solo-registration`,
          {
            eventId: eventId,
          }
        );
        setIsLoading(false);
        console.log(response);
        return toast({
          title: response.data.message,
          description: "You can start participation now",
          duration: 1500,
        });
      } catch (error) {
        console.log(error);
        return toast({
          title: "Something went wrong",
          variant: "destructive",
          description: "You can start participation now",
          duration: 1500,
        });
      }
    } else {
      const callbackUrl = encodeURIComponent(window.location.href);
      router.push(`/signin?callbackUrl=${callbackUrl}`);
    }
  };
  return (
    <Button
      onClick={handleSoloRegistration}
      className="flex items-center gap-2 max-md:w-full"
    >
      {isLoading && (
        <Loader2 className="size-5 animate-spin text-foreground/75 " />
      )}
      Register for this event
    </Button>
  );
};

export default RegisterSoloButton;
