import GradientAnimatedText from "@/components/GradientAnimatedText";
import ImageCard from "@/components/ImageCard";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import Marquee from "@/components/magicui/marquee";
import { sponsorImages } from "@/lib/static";
import Image from "next/image";
import React from "react";

const imageData = [
  {
    alt: "photo",
    url: "/gallery/1.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/2.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/3.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/4.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/5.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/6.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/7.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/8.jpg",
  },
  {
    alt: "photo",
    url: "/gallery/9.jpg",
  },
];
const page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <GradientAnimatedText className="text-3xl mt-8 mb-2  font-bold tracking-tighter sm:text-3xl xl:text-4xl/none  text-center">
        Gallery
      </GradientAnimatedText>

      <p className="text-center text-pretty tracking-tighter text-lg sm:text-xl xl:text-2xl/none italic text-transparent bg-clip-text bg-gradient-to-br text-gradient-to-br from-yellow-200 to-orange-700">
        Glimpse from Updates 2k23
      </p>
      {/* <Marquee
        // reverse
        pauseOnHover
        className="[--duration:30s] max-w-7xl mx-auto"
      >
        {imaata.map((revw) => (
          <ImageCard key={review.url} img={review.url} />
        ))}
      </Marquee> */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {imageData.map((image, index) => (
            <div
              key={index}
              className={`
              ${index === 0 ? "col-span-2 row-span-2" : ""}
              ${index === 5 ? "col-span-1" : ""}
              ${index === 6 ? "col-span-1" : ""}
              overlow-hidden rounded-lg shadow-lg
            `}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover object-center rounded border shadow-lg shadow-violet-500/15"
              />
            </div>
          ))}
        </div>
      </div>
      <GradientAnimatedText className="text-2xl mt-8 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Main Co-ordinators
      </GradientAnimatedText>
      <GradientAnimatedText className="text-2xl mt-8 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Web Team
      </GradientAnimatedText>
      <GradientAnimatedText className="text-2xl mt-8 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Marketing Team
      </GradientAnimatedText>
      <GradientAnimatedText className="text-2xl mt-8 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Graphics Team
      </GradientAnimatedText>
      <PersonCard />
      <GradientAnimatedText className="text-2xl mt-8 mb-2 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none">
        Decoration Team
      </GradientAnimatedText>
    </div>
  );
};

const PersonCard = () => {
  return (
    <>
      <Image src={""} alt="" />
      <p>Name</p>
    </>
  );
};
export default page;
