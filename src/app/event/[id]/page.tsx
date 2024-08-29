import { Button } from "@/components/ui/button";
import connectDB from "@/db";
import Event from "@/models/event.model";
import mongoose, { ObjectId } from "mongoose";
import Link from "next/link";
import React from "react";
import RegisterSoloButton from "./_components/RegisterSoloButton";
import { redirect } from "next/navigation";
import GroupRegistration from "@/models/groupRegistration.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

type Props = {};

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session?.user.id && !session?.user.email) {
    return redirect("/");
  }

  const eventData = await Event.findOne({
    _id: new mongoose.Types.ObjectId(params.id!),
  });

  if (!eventData) {
    return redirect("/");
  }

  const data = await GroupRegistration.find({
    userId: session.user.id,
    eventId: params.id,
  });

  console.log("data");
  console.log(data);

  const groupId = data[0]?.groupId;
  const pipeline = [
    {
      $match: {
        groupId: new mongoose.Types.ObjectId(groupId),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "result",
        pipeline: [
          {
            $project: {
              _id: 0,
              createdAt: 0,
              updatedAt: 0,
              __v: 0,
            },
          },
        ],
      },
    },
    {
      $addFields: {
        user: { $first: "$result" },
      },
    },
    {
      $project: {
        _id: 0,
        groupId: 0,
        result: 0,
        userId: 0,
        eventId: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      },
    },
  ];

  const dataOfMembers = await GroupRegistration.aggregate(pipeline);

  return (
    <div>
      {eventData.eventType == "GROUP" && dataOfMembers.length == 0 && (
        <Link href={`/event/${params.id}/registration`}>Register group</Link>
      )}
      {eventData.eventType == "GROUP" && dataOfMembers.length > 0 && (
        <>
          <h1>Group Memebrs of your team</h1>
          {dataOfMembers.map((item, index) => {
            return (
              <li key={index}>
                {item.user.name} || {item.user.email}
              </li>
            );
          })}
        </>
      )}
      {eventData.eventType == "SOLO" && (
        <RegisterSoloButton eventId={eventData.id} />
      )}
    </div>
  );
};

export default page;