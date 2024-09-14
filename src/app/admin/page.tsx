import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import EventForm from "./_components/EventForm";
import Title from "@/components/Title";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  if (session?.user.id != "66dc4f05984c28cea64f493b") {
    redirect("/");
  }

  return (
    <div className="flex justify-center w-full  pb-10">
      <div>
        <Title title="Generate CSV "></Title>
        <div>
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default page;
