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
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import GroupRegistrationForm, { EmailOption } from "./_components/GroupForm";
import User from "@/models/user.model";
import events from "@/lib/events";
import GradientAnimatedText from "@/components/GradientAnimatedText";

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  const eventId = params.id;
  const currEvent = events.filter((event) => {
    return event.id === eventId;
  })[0];

  console.log(eventId);
  console.log("EVENT PAGE");
  console.log(currEvent);

  if (!currEvent) {
    return redirect("/events");
  }

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
    <div className="px-8 max-w-7xl mx-auto mb-36">
      <GradientAnimatedText className="mt-12 text-3xl font-black xl:text-4xl/none text-center">
        {currEvent.name}
      </GradientAnimatedText>
      <BlurFade inView>
        <p className="italic text-center text-violet-100 mb-8">
          &quot;{currEvent.Tagline}&quot;
        </p>
        {eventData.eventType == "SOLO" ? (
          <div className="flex items-center justify-center">
            <RegisterSoloButton
              eventId={eventData._id.toString()}
              isAlredyRegister={isSoloAlredyRegistered}
            />
          </div>
        ) : dataOfMembers.length == 0 ? (
          <GroupRegistrationForm
            mini={eventData.minMember}
            maxi={eventData.maxMember}
            eventId={eventData._id.toString()}
            emailOptions={emailOptions}
          />
        ) : (
          <div className="p-4 w-full bg-gradient-to-br from-red-950/30 to-red-800/30 rounded-lg border border-red-900/70">
            <p className="italic text-sm text-violet-50/60 mb-4">
              *you have already registered for this event
            </p>
            <h4 className="text-lg font-bold text-white">Team Members:</h4>
            <ul className="list-disc list-inside text-muted-foreground">
              {dataOfMembers.map((data, index) => {
                return (
                  <li
                    key={data.user.name}
                    className="flex items-center gap-3 ml-4 mt-0.5"
                  >
                    <div>
                      <p>{data.user.name}</p>
                      {/* <p>{data.user.mobileNumber}</p> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <Image
          src={currEvent.coverImage}
          alt={currEvent.id}
          width={1080}
          height={1920}
          className="w-full rounded-xl border border-violet-400/70 md:hidden mx-auto my-6"
        />
        <div className="md:grid grid-cols-6 gap-6  mt-6">
          <Image
            src={currEvent.coverImage}
            alt={currEvent.id}
            width={1080}
            height={1920}
            className="w-full col-span-2 rounded-xl border border-violet-400/70 shadow-lg shadow-purple-600/30 max-md:hidden mx-auto"
            loading="eager"
          />
          <div className="p-4 w-full col-span-4 bg-gradient-to-br from-slate-900/30 to-violet-900/30 rounded-lg border border-violet-400/70">
            <h4 className="text-3xl mb-2 mt-1 font-bold text-violet-500">
              Rules:
            </h4>
            <ul>
              {currEvent?.rounds.map((round, index) => {
                return (
                  <li className="mt-3" key={round.name}>
                    <p className="text-lg mt-3 mb-1 capitalize font-bold underline text-yellow-200">
                      {round.name}
                    </p>
                    <ul className="list-disc px-3">
                      {round.Rules.map((rule, index) => {
                        return (
                          <li key={rule} className="text-sm mt-0.5">
                            {rule}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="p-4 mt-6 w-full bg-gradient-to-br from-slate-900/30 to-teal-900/30 rounded-lg border border-teal-400/70 sm:grid sm:grid-cols-2">
          <div className="sm:border-r-2 sm:mr-4">
            <h4 className="text-xl mb-4 font-bold text-teal-400 capitalize">
              Event Coordinators
            </h4>
            <ul className="list-none space-y-2">
              {currEvent["co-ordinators"].map((person) => {
                return (
                  <li
                    key={person.profilePic}
                    className="flex items-center gap-3"
                  >
                    <Image
                      alt={person.name}
                      src={`/photos/${person.profilePic}`}
                      width={48}
                      height={40}
                      className="rounded-full border"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <p>{person.name}</p>
                      {/* <p>{person.mobileNumber}</p> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl mb-4 mt-8 sm:mt-0 font-bold text-teal-400 capitalize">
              volunteers
            </h4>
            <ul className="list-none space-y-2">
              {currEvent.volunteers.map((person) => {
                return (
                  <li key={person.name} className="flex items-center gap-3">
                    <Image
                      alt={person.name}
                      src={`/photos/${person.profilePic}`}
                      width={48}
                      height={48}
                      className="rounded-full border"
                      loading="lazy"
                    />
                    <div>
                      <p>{person.name}</p>
                      {/* <p>{person.mobileNumber}</p> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default page;
