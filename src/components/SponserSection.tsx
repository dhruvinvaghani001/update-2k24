import React from "react";
import BlurFade from "./magicui/blur-fade";
import GradientAnimatedText from "./GradientAnimatedText";
import Image from "next/image";
import codewinglet from "/public/sponsers/codewinglet.svg";
import vsOverseas from "/public/sponsers/vs-overseas.png";

const SponserSection = () => {
  return (
    <section className="py-24 relative">
      <div className="w-[300px] sm:w-[600px] h-[600px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full blur-3xl bg-gradient-to-br from-slate-900 to-violet-900 opacity-40"></div>
      <div className="absolute z-30 left-0 right-0 bottom-3/4 top-0 bg-gradient-to-b from-background/70 via-transparent to-transparent"></div>
      <BlurFade inView className="mt-12 md:my-12">
        <GradientAnimatedText className="font-bold tracking-tighter text-3xl xl:text-4xl/none text-center">
          Title Sponsors
        </GradientAnimatedText>
      </BlurFade>
      <BlurFade inView className="mt-6 mb-12 md:my-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 m-4">
          <Image
            src={codewinglet}
            alt="Events Schedule"
            className="aspect-video scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg"
            loading="lazy"
          />
          <Image
            src={vsOverseas}
            alt="Events Schedule"
            className="scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg"
            loading="lazy"
          />
        </div>
      </BlurFade>
    </section>
  );
};

export default SponserSection;
