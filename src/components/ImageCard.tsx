import { cn } from "@/lib/utils";
import Image from "next/image";

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div
      className={cn(
        "relative w-64 h-64 cursor-pointer overflow-hidden rounded-xl ",
        "bg-secondary"
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
