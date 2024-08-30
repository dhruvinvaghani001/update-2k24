import GridPattern from "@/components/magicui/animated-grid-pattern";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Navbar } from "@/components/Navbar";
import TopNavBar from "@/components/TopNavBar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import UpdatesLogo from "@/assets/updates-logo.png";
import ScheduleImage from "@/assets/eventSchedule.jpg";
import { event } from "@/lib/static";
import Card from "@/components/EventCard";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

const featuredEvents = event.slice(0, 3);
console.log(featuredEvents);

export default async function Page() {
  return (
    <main className="min-h-screen bg-background max-w-7xl mx-auto relative mb-36">
      {/* <Navbar /> */}
      <section className="relative flex h-[70vh] w-full overflow-hidden rounded-lg bg-background p-20">
        <GridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12",
            "opacity-60"
          )}
        />

        <div className="flex items-center justify-center h-fit mx-auto">
          <div className="my-48">
            <BlurFade delay={0.25} inView>
              {/* <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600">
                Updates 2k24
              </h2> */}
              <AnimatedGradientText className="mb-2">
                <span
                  className={cn(
                    `border-transparent inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none`
                  )}
                >
                  Update 2k24
                </span>
              </AnimatedGradientText>

              {/* <Image
                src={UpdatesLogo}
                alt="Updates Logo"
                className="aspect-square "
              /> */}
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <p className="text-center text-pretty tracking-tighter sm:text-xl xl:text-2xl/none">
                From floppy to the cloud
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="my-24 mx-4">
        <BlurFade delay={0.25 * 2} inView className="my-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center">
            Title Sponsor
          </h2>
        </BlurFade>
        <Image
          src={ScheduleImage}
          alt="Events Schedule"
          className="aspect-video"
        />
        <Image
          src={ScheduleImage}
          alt="Events Schedule"
          className="aspect-video"
        />
      </section>
      <section className="my-24 mx-4">
        <BlurFade delay={0.25} inView className="my-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center">
            Featured Events
          </h2>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView className="my-12">
          {/* card */}
          <div className="grid grid-cols-1  xl:grid-cols-3 gap-8 mx-auto w-fit">
            {featuredEvents.map((data) => {
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
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView className="my-8 text-center">
          <a
            href="/events"
            className="text-lg font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
          >
            Show More Events
          </a>
        </BlurFade>
      </section>

      <section className="my-24 mx-4">
        <BlurFade delay={0.25 * 2} inView className="my-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center">
            Schedule
          </h2>
        </BlurFade>
        <Image
          src={ScheduleImage}
          alt="Events Schedule"
          className="aspect-video"
        />
      </section>
    </main>
  );
}
