import GridPattern from "@/components/magicui/animated-grid-pattern";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";

export default async function Page() {
  return (
    <main className="min-h-screen bg-background max-w-7xl mx-auto">
      <Navbar />
      <section className="relative flex h-[75vh] w-full overflow-hidden rounded-lg bg-background p-20">
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
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600">
                Updates 2k24
              </h2>
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
        <BlurFade delay={0.25} inView className="my-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center">
            Featured Events
          </h2>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView className="my-12">
          <div className="grid grid-cols-1  xl:grid-cols-3 gap-8 mx-auto w-fit">
            {/* card */}
            <div className="max-w-xs w-full">
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border"
                )}
              >
                <div className="text relative z-50">
                  <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                    Background Overlays
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4">
                    This card is for some special elements, like displaying
                    background gifs on hover only.
                  </p>
                </div>
                <BorderBeam size={250} duration={48} delay={9} />
              </div>
            </div>

            <div className="max-w-xs w-full">
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border"
                )}
              >
                <div className="text relative z-50">
                  <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                    Background Overlays
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4">
                    This card is for some special elements, like displaying
                    background gifs on hover only.
                  </p>
                </div>
                <BorderBeam size={250} duration={48} delay={18} />
              </div>
            </div>

            <div className="max-w-xs w-full">
              <div
                className={cn(
                  "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border"
                )}
              >
                <div className="text relative z-50">
                  <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                    Background Overlays
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4">
                    This card is for some special elements, like displaying
                    background gifs on hover only.
                  </p>
                </div>
                <BorderBeam size={250} duration={48} delay={36} />
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
