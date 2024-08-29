import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import Title from "@/components/Title";
import { event } from "@/lib/static";
import { cn } from "@/lib/utils";
import { Description } from "@radix-ui/react-dialog";
import React from "react";

const page = () => {
  return (
    <>
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
    </>
  );
};

export default page;

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <BlurFade delay={0.25 * 2} inView className="my-12">
      {/* card */}
      <div className="max-w-xs w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border"
          )}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              {title}
            </h1>
            <p className="font-normal text-base text-gray-50 relative my-4">
              {description}
            </p>
          </div>
          <BorderBeam size={250} duration={48} delay={9} />
        </div>
      </div>
    </BlurFade>
  );
};
