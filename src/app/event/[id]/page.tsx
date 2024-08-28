import { Button } from "@/components/ui/button";
import connectDB from "@/db";
import Event from "@/models/event.model";
import mongoose from "mongoose";
import Link from "next/link";
import React from "react";
import RegisterSoloButton from "./_components/RegisterSoloButton";
import { redirect } from "next/navigation";

type Props = {};

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  const eventData = await Event.findOne({
    _id: new mongoose.Types.ObjectId(params.id!),
  });

  if (!eventData) {
    redirect("/");
  }

  return (
    <div>
      page {params.id}
      {eventData.eventType == "GROUP" && (
        <Link href={`/event/${params.id}/registration`}>Register group</Link>
      )}
      {eventData.eventType == "SOLO" && (
        <RegisterSoloButton eventId={eventData.id} />
      )}
    </div>
  );
};

export default page;
