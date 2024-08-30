import Card from "@/components/EventCard";
import Title from "@/components/Title";
import { event } from "@/lib/static";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="mb-36">
      <Title title="Events"></Title>
      <div className="grid grid-cols-1  xl:grid-cols-3 gap-8 mx-auto w-fit">
        {event.map((data) => {
          return (
            <Link href={`/event/${data.id}`}>
              <Card
                title={data.name}
                description={data.description}
                // coverImage={data?.coverImage}
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
