import React from "react";
import GridPattern from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import BlurFade from "./magicui/blur-fade";
import Image from "next/image";
import UpdatesLogo from "@/assets/updates-logo.png";
// import ScetLogo from "@/assets/scet-logo.jpeg";
// import SuLogo from "@/assets/su-logo.png";

const HeroSection = () => {
  return (
    <section className="relative pb-32 flex w-full overflow-hidden rounded-lg bg-background md:py-10">
      <div className="absolute z-30 inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 max-md:inset-y-[-70%] md:h-[100%] h-[200%] skew-y-12",
          "opacity-70"
        )}
      />

      <div className="flex items-center justify-center h-fit mx-auto z-40">
        <div className="mt-32">
          <BlurFade inView className="mx-6">
            {/* <GradientAnimatedText className="font-bold tracking-tighter text-5xl xl:text-6xl/none ">
                Updates 2k24
              </GradientAnimatedText> */}

            <Image
              src={UpdatesLogo}
              alt="Updates Logo"
              className="my-3"
              priority
            />
          </BlurFade>
          <BlurFade inView>
            <p className="text-center text-pretty tracking-tighter text-lg sm:text-xl text-muted-foreground -mt-4 italic">
              From floppy to the cloud
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
