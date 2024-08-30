import React from "react";
import GroupRegistrationForm from "./_components/GroupForm";
import connectDB from "@/db";
import User from "@/models/user.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Event from "@/models/event.model";
import { redirect } from "next/navigation";
import GroupRegistration from "@/models/groupRegistration.model";
import mongoose from "mongoose";

const Page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session?.user.id && !session?.user.email) {
    redirect("/");
  }

  const alredyUserRegistered = await GroupRegistration.findOne({
    eventId: params.id,
    userId: session?.user.id,
  });

  if (alredyUserRegistered) {
    return redirect(`/event/${params.id}`);
  }

  const eventData = await Event.findOne({ _id: params.id });

  // this is to filter out email it means dont show email which is alredy part of other group
  let alredyresgitersIds: string[] = [];

  const allRegistration = await GroupRegistration.find({
    eventId: params.id,
  });
  const existedUsers = allRegistration.map((gp) => gp.userId);
  alredyresgitersIds.push(session.user.id);
  alredyresgitersIds = [...alredyresgitersIds, ...existedUsers];

  const userdata = await User.find({
    _id: { $nin: alredyresgitersIds },
  });

  // all emails which is available for the group
  const emailOptions = userdata.map((user) => ({
    label: user.email,
    value: user._id.toString(),
  }));

  return (
    <div>
      <GroupRegistrationForm
        emailOptions={emailOptions}
        mini={eventData?.minMember}
        maxi={eventData?.maxMember}
        eventId={eventData._id.toString()}
      />
    </div>
  );
};

export default Page;
