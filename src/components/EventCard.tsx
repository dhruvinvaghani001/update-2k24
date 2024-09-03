import { cn } from "@/lib/utils";
import BlurFade from "./magicui/blur-fade";
import { BorderBeam } from "./magicui/border-beam";
import Image from "next/image";
import thubmnail from "@/assets/thumbnail.jpeg";

const Card = ({
  title,
  tagline,
  coverImage,
}: {
  title: string;
  tagline: string;
  coverImage: string;
}) => {
  return (
    <BlurFade inView className="overflow-hidden mx-auto">
      {/* card */}
      <div className="max-w-xs w-full bg-gradient-to-br from-slate-900/30 to-violet-900/30 rounded-lg">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-fit md:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border",
            "flex flex-col justify-between gap-6 py-8"
          )}
        >
          {/* <div className="overflow-hidden aspect-video h-full rounded border border-violet-500/50 shadow-lg shadow-violet-500/30 bg-violet-900/20"> */}
          <Image
            src={coverImage}
            alt={`cover image for event ${title}`}
            width={1080}
            height={1920}
            className="object-cover h-48 aspect-video rounded border border-violet-100/20 shadow-lg shadow-violet-500/40 bg-violet-900/20"
          />
          {/* </div> */}
          <div className="text relative z-50 my-auto">
            <h1 className="font-bold text-xl md:text-3xl text-primary-foreground relative uppercase text-center">
              {title}
            </h1>
            <p className="font-normal text-muted-foreground relative text-sm text-center">
              {tagline}
            </p>
          </div>
          <BorderBeam size={250} duration={48} delay={9} className="" />
        </div>
      </div>
    </BlurFade>
  );
};
export default Card;
