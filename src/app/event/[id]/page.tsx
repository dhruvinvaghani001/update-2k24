import connectDB from "@/db";
import Event from "@/models/event.model";
import mongoose from "mongoose";
import React from "react";
import RegisterSoloButton from "./_components/RegisterSoloButton";
import { redirect } from "next/navigation";
import GroupRegistration from "@/models/groupRegistration.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import SoloRegistration from "@/models/soloRegistration.model";
import Title from "@/components/Title";
import { event } from "@/lib/static";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import GroupRegistrationForm, { EmailOption } from "./_components/GroupForm";
import User from "@/models/user.model";
import events from "@/lib/events";

type Props = {};

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  const eventId = params.id;
  const currEvent = events.filter((event) => {
    return event.id === eventId;
  })[0];

  console.log(eventId);
  console.log("EVENT PAGE");
  console.log(currEvent);

  // if (!currEvent) {
  //   return redirect("/events");
  // }

  await connectDB();

  const eventData = await Event.findOne({
    name: params.id,
  });
  if (!eventData) {
    return redirect("/events");
  }

  let isSoloAlredyRegistered = false;
  if (eventData.eventType == "SOLO") {
    const alredyRegistered = await SoloRegistration.find({
      userId: session?.user.id,
      eventId: eventData._id,
    });
    isSoloAlredyRegistered = alredyRegistered.length == 0 ? false : true;
  }
  let dataOfMembers = [];
  let emailOptions: EmailOption[] = [];
  if (eventData.eventType == "GROUP") {
    let alredyresgitersIds: (string | undefined)[] = [];

    const allRegistration = await GroupRegistration.find({
      eventId: eventData._id,
    });
    const existedUsers = allRegistration.map((gp) => gp.userId);
    alredyresgitersIds.push(session?.user.id);
    alredyresgitersIds = [...alredyresgitersIds, ...existedUsers];

    const userdata = await User.find({
      _id: { $nin: alredyresgitersIds },
    });

    // all emails which is available for the group
    emailOptions = userdata.map((user) => ({
      label: user.email,
      value: user._id.toString(),
    }));

    const data = await GroupRegistration.find({
      userId: session?.user.id,
      eventId: eventData._id,
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

    dataOfMembers = await GroupRegistration.aggregate(pipeline);
  }

  return (
    <div className="mx-8">
      <Title title={currEvent.name} className="mb-0 font-black" />
      <BlurFade delay={0.1} inView>
        <p className="italic text-center text-muted-foreground mt-3 mb-8">
          &quot;{currEvent.description}&quot;
        </p>
        <h4 className="text-xl my-4 font-bold text-pink-500">Rules: </h4>
        <ul className="list-decimal list-inside">
          {currEvent?.rounds.map((rule, index) => {
            return <li key={index}>{rule.name}</li>;
          })}
        </ul>
        <div className="my-8">
          <h4 className="text-xl my-4 font-bold text-pink-500">
            Event Coordinators
          </h4>
          <ul className="list-none space-y-2">
            {currEvent["co-ordinators"].map((person) => {
              return (
                <li key={person.image} className="flex items-center gap-3">
                  <Image
                    alt={person.name}
                    src={`/photos/${person.image}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p>{person.name}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="my-8">
          <h4 className="text-xl my-4 font-bold text-pink-500">volunteers</h4>
          <ul className="list-none space-y-2">
            {currEvent.volunteer.map((person) => {
              return (
                <li key={person.name} className="flex items-center gap-3">
                  <Image
                    alt={person.name}
                    src={`/photos/${person.image}`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p>{person.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {eventData.eventType == "SOLO" ? (
          <RegisterSoloButton
            eventId={eventData._id.toString()}
            isAlredyRegister={isSoloAlredyRegistered}
          />
        ) : dataOfMembers.length == 0 ? (
          <GroupRegistrationForm
            mini={eventData.minMember}
            maxi={eventData.maxMember}
            eventId={eventData._id.toString()}
            emailOptions={emailOptions}
          />
        ) : (
          <>
            Data of memebers
            {dataOfMembers.map((data, index) => {
              return (
                <li key={index}>
                  {data.user.name} || {data.user.email}
                </li>
              );
            })}
          </>
        )}
      </BlurFade>
    </div>
  );
};

export default page;
