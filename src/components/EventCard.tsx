import { cn } from "@/lib/utils";
import BlurFade from "./magicui/blur-fade";
import { BorderBeam } from "./magicui/border-beam";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <BlurFade delay={0.1} inView className="">
      {/* card */}
      <div className="max-w-xs w-full">
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
              {description}
            </p>
          </div>
          <BorderBeam size={250} duration={48} delay={9} />
        </div>
      </div>
    </BlurFade>
  );
};
export default Card;
