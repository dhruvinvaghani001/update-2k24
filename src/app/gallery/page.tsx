import ImageCard from "@/components/ImageCard";
import Marquee from "@/components/magicui/marquee";
import { sponsorImages } from "@/lib/static";
import Image from "next/image";
import React from "react";

const page = () => {
  const secondRow = sponsorImages.slice(sponsorImages.length / 2);
  return (
    <div>
      <h2
        className={
          "text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center my-8"
        }
      >
        Gallery
      </h2>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:20s] max-w-7xl mx-auto"
      >
        {secondRow.map((review) => (
          <ImageCard key={review.name} img={review.img} />
        ))}
      </Marquee>
      <h2
        className={
          "text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center my-8"
        }
      >
        Main Coordinator
      </h2>
      <h2
        className={
          "text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center my-8"
        }
      >
        Web Team
      </h2>
      <h2
        className={
          "text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center my-8"
        }
      >
        Marketing Team
      </h2>
      <h2
        className={
          "text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center my-8"
        }
      >
        Graphics Team
        <PersonCard />
      </h2>
      <h2
        className={
          "text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 text-center my-8"
        }
      >
        Decoration Team
      </h2>
    </div>
  );
};

const PersonCard = () => {
  return (
    <>
      <Image src={""} alt="" />
      <h1>Name</h1>
    </>
  );
};
export default page;
