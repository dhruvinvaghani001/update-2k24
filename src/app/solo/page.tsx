"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import axios from "axios";

type Props = {};

const Page = (props: Props) => {
  const handleRegistration = async () => {
    try {
      const response = await axios.post("/api/registration/solo", {
        eventId: "66cb346fe06ce5bf0dbf0c59",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* eventId -- 66cb346fe06ce5bf0dbf0c59 eventId -- 66cb346fe06ce5bf0dbf0c5a */}
      <Button onClick={handleRegistration}>Register</Button>
    </div>
  );
};

export default Page;
