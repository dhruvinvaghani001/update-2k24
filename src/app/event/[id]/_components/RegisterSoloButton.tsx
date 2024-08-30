"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

type Props = {};

const RegisterSoloButton = ({ eventId }: { eventId: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSoloRegistration = async () => {
    if (status == "authenticated") {
      try {
        const response = await axios.post(
          `/api/event/${eventId}/solo-registration`,
          {
            eventId: eventId,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      const callbackUrl = encodeURIComponent(window.location.href);
      router.push(`/signin?callbackUrl=${callbackUrl}`);
    }
  };
  return <Button onClick={handleSoloRegistration}>Participatns</Button>;
};

export default RegisterSoloButton;
