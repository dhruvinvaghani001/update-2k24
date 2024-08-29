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
import SoloRegistration from "@/models/soloRegistration.model";
import GroupRegisterButton from "./_components/GroupRegisterButton";

type Props = {};

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  const session = await getServerSession(authOptions);

  const eventData = await Event.findOne({
    _id: new mongoose.Types.ObjectId(params.id!),
  });

  if (!eventData) {
    return redirect("/");
  }

  const data = await GroupRegistration.find({
    userId: session?.user.id,
    eventId: params.id,
  });

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

  let isRegister = false;
  if (eventData?.eventType == "SOLO") {
    const soloRegistration = await SoloRegistration.findOne({
      eventId: params.id,
      userId: session?.user?.id,
    });
    isRegister = soloRegistration ? true : false;
  }
  const isAuthorised = session?.user.email ? true : false;

  return (
    <div>
      {eventData.eventType == "GROUP" && dataOfMembers.length == 0 && (
        <GroupRegisterButton
          eventId={params.id}
          isAuthorised={isAuthorised}
        ></GroupRegisterButton>
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
      {eventData.eventType == "SOLO" && !isRegister && (
        <RegisterSoloButton eventId={eventData.id} />
      )}
      {eventData.eventType == "SOLO" && isRegister && <> alredy resgietered </>}
    </div>
  );
};

export default page;
