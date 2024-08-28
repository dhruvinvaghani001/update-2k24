import React from "react";
import GroupRegistrationForm from "./_components/GroupForm";
import connectDB from "@/db";
import User from "@/models/user.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Event from "@/models/event.model";

const Page = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const session = await getServerSession(authOptions);

  const userdata = await User.find({ _id: { $ne: session?.user.id! } });
  const emailOptions = userdata.map((user) => ({
    label: user.email,
    value: user._id.toString(),
  }));

  const eventData = await Event.findOne({ _id: params.id });

  return (
    <div>
      <GroupRegistrationForm
        emailOptions={emailOptions}
        mini={eventData?.minMemebr}
        maxi={eventData?.maxMember}
        eventId={eventData._id.toString()}
      />
    </div>
  );
};

export default Page;
