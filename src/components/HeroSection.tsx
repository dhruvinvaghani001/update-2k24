import React from "react";
import GridPattern from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import BlurFade from "./magicui/blur-fade";
import Image from "next/image";
import UpdatesLogo from "@/assets/updates-logo.png";
// import UpdatesLogo from "/public/updates-logo.gif";

const HeroSection = () => {
  return (
    <section className="relative flex w-full overflow-hidden rounded-lg bg-background md:py-10">
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 max-md:inset-y-[-70%] sm:h-[100%] h-[200%] skew-y-12",
          "opacity-60"
        )}
      />

      <div className="flex items-center justify-center h-fit mx-auto">
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
