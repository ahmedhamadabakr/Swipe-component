"use client";

import useEmblaCarousel from "embla-carousel-react";
import LatestPostCard from "./LatestPostCard";

export default function PropertyCarousel({ posts }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    direction: "rtl",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {posts.map((post) => (
          <div
            key={post._id ?? post.code}
            className="
              flex-[0_0_85%]
              sm:flex-[0_0_48%]
              lg:flex-[0_0_32%]
              pl-4
            "
          >
            <LatestPostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}