"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import axios from "axios";

type Props = {};

const RegisterSoloButton = ({ eventId }: { eventId: string }) => {
  const handleSoloRegistration = async () => {
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
  };
  return <Button onClick={handleSoloRegistration}>Participatns</Button>;
};

export default RegisterSoloButton;
