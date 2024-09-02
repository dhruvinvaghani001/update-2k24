import { cn } from "@/lib/utils";
import BlurFade from "./magicui/blur-fade";
import { BorderBeam } from "./magicui/border-beam";

const Card = ({ title, tagline }: { title: string; tagline: string }) => {
  return (
    <BlurFade inView className="overflow-hidden">
      {/* card */}
      <div className="max-w-xs w-full bg-gradient-to-br from-slate-900/30 to-violet-900/30 rounded-lg">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border"
          )}
        >
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-primary-foreground relative ">
              {title}
            </h1>
            <p className="font-normal text-base text-muted-foreground relative my-4">
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
