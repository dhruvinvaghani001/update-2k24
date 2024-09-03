import GridPattern from "@/components/magicui/animated-grid-pattern";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ScheduleImage from "@/assets/eventSchedule.jpg";
import Card from "@/components/EventCard";
import GradientAnimatedText from "@/components/GradientAnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import codewinglet from "/public/sponsers/codewinglet.svg";
import vsOverseas from "/public/sponsers/vs-overseas.png";

import { featuredEvents } from "@/lib/events";
export default async function Page() {
  return (
    <main className="min-h-screen bg-background max-w-7xl mx-auto relative mb-36">
      {/* <Navbar /> */}
      <section className="relative flex w-full overflow-hidden rounded-lg bg-background py-20">
        <GridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 max-md:inset-y-[-70%] sm:h-[100%] h-[200%] skew-y-12",
            "opacity-40"
          )}
        />

        <div className="flex items-center justify-center h-fit mx-auto">
          <div className="my-48">
            <BlurFade inView>
              <GradientAnimatedText className="font-bold tracking-tighter text-5xl xl:text-6xl/none ">
                Updates 2k24
              </GradientAnimatedText>

              {/* <Image
                src={UpdatesLogo}
                alt="Updates Logo"
                className="aspect-square "
              /> */}
            </BlurFade>
            <BlurFade inView>
              <p className="text-center text-pretty tracking-tighter sm:text-xl xl:text-2xl/none">
                From floppy to the cloud
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="w-[400px] sm:w-[600px] h-[600px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full blur-3xl bg-gradient-to-br from-slate-900 to-violet-900 opacity-40"></div>
        <BlurFade inView className="my-12">
          <GradientAnimatedText className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none  text-center">
            Title Sponsor
          </GradientAnimatedText>
        </BlurFade>
        <BlurFade inView className="my-12">
          <div className="flex flex-col md:divide-x md:flex-row justify-center items-center md:gap-4 m-4">
            <Image
              src={codewinglet}
              alt="Events Schedule"
              className="aspect-video scale-75 md:scale-100 invert w-4/5 md:w-1/4 rounded-lg"
            />
            <Image
              src={vsOverseas}
              alt="Events Schedule"
              className="w-4/5 md:w-1/4 rounded-lg scale-75"
            />
          </div>
        </BlurFade>
      </section>

      {/* <section className="my-24 mx-4">
        <Title title="Co-Sponsors"></Title>
        <BlurFade delay={0.1 * 4} inView className="my-12">
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg max-w-5xl mx-auto">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ImageCard key={review.name} img={review.img} />
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </section> */}

      <section className="my-24 mx-4">
        <BlurFade inView className="my-12">
          <div className="flex items-center justify-between max-w-5xl mx-auto px-8">
            <div className="group relative flex max-w-fit flex-row items-center justify-center rounded-2xl py-1.5 text-3xl font-medium backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] ">
              <span
                className={`border-none inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none`}
              >
                Featured Events
              </span>
            </div>
            <Link href={"/events"}>
              <Button
                className="rounded-full flex items-center justify-center gap-1 px-3 py-1.5 h-auto"
                variant={"outline"}
              >
                <span className="capitalize text-xs">all events</span>
                <ArrowRightIcon className="size-3.5" />
              </Button>
            </Link>
          </div>
        </BlurFade>

        <BlurFade inView className="my-12">
          {/* card */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-fit mx-auto">
            {featuredEvents.map((data) => {
              return (
                <Link
                  href={`/event/${data.id}`}
                  className="w-full"
                  key={data.id}
                >
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
        </BlurFade>
      </section>

      <section className="my-24 relative mx-4">
        <div className="w-[400px] h-[400px] absolute -translate-x-1/2 -translate-y-1/2 left-1/3 top-1/3 rounded-full blur-3xl bg-gradient-to-br from-slate-900 to-violet-900 opacity-40 overflow-hidden"></div>
        <BlurFade inView className="mb-6">
          <GradientAnimatedText className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none  text-center">
            Schedule
          </GradientAnimatedText>
        </BlurFade>
        <BlurFade inView className="mx-4">
          <div className="overflow-hidden">
            <Image
              src={ScheduleImage}
              alt="Events Schedule"
              className="aspect-video rounded-xl md:rounded-2xl"
            />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
