import Card from "@/components/EventCard";
import Title from "@/components/Title";
import { event } from "@/lib/static";
import React from "react";

const page = () => {
  return (
    <section className="mb-36">
      <Title title="Events"></Title>
      <div className="grid grid-cols-1  xl:grid-cols-3 gap-8 mx-auto w-fit">
        {event.map((data) => {
          return (
            <Card
              title={data.name}
              description={data.description}
              // coverImage={data?.coverImage}
              key={data.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
