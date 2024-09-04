import Card from "@/components/EventCard";
import GradientAnimatedText from "@/components/GradientAnimatedText";
import events from "@/lib/events";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="mb-36">
      <GradientAnimatedText className="mt-8 mb-10 text-3xl font-bold tracking-tighter xl:text-4xl/none  text-center">
        Events
      </GradientAnimatedText>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mx-auto w-fit">
        {events.map((data) => {
          return (
            <Link href={`/event/${data.id}`} key={data.id}>
              <Card
                title={data.name}
                tagline={data.Tagline}
                coverImage={data.coverImage}
                key={data.id}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
