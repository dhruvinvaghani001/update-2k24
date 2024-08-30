import { cn } from "@/lib/utils";
import Image from "next/image";

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div
      className={cn(
        "relative w-64 h-64 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-white bg-gray-950 hover:bg-gray-950",
        // dark styles
        "dark:border-white dark:bg-gray-50 dark:hover:bg-gray-50"
      )}
    >
      <Image
        src={img}
        alt="Co-sponsor"
        layout="fill"
        objectFit="cover"
        className="rounded-xl aspect-video"
      />
    </div>
  );
};

export default ImageCard;
