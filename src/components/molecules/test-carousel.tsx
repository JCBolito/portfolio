"use client";

import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const autoplayOptions = {
  delay: 2000,
  rootNode: (emblaRoot: any) => emblaRoot.parentElement,
};

const slidesData = [
  {
    type: "Information",
    title: "Mission",
    description:
      "G-Connect's mission is to make studying easier and more effective for students. We believe that studying with a buddy is a great way to improve academic performance, stay motivated, and make learning more enjoyable.",
    name: "",
    role: "",
    profilePicture: "",
  },
  {
    type: "Information",
    title: "Vision",
    description:
      "Our vision is to be the go-to website for students who are looking for study buddies. We want to make it easy for students to find study buddies who are compatible with them and who can help them to succeed academically.",
    name: "",
    role: "",
    profilePicture: "",
  },
  {
    type: "Testimonial",
    title: "",
    description:
      "We developed G-Connect because we believe that everyone has the potential to succeed, but not everyone has the same opportunities. We want to make sure that all students have access to the resources they need to succeed academically. G-Connect is our way of making a difference in the world.",
    name: "Adrian",
    role: "Web Dev Lead @ GDSC-PLM",
    profilePicture: "/landing-page-carousel-images/adrian.png",
  },
  {
    type: "Testimonial",
    title: "",
    description:
      "I love the challenge of solving problems and creating something new. I'm passionate about building tools that help people learn. G-Connect is my way of using my skills to make a positive impact on the world.",
    name: "Dzelle",
    role: "Web Dev Lead @ GDSC-PLM",
    profilePicture: "/landing-page-carousel-images/dzelle.png",
  },
  {
    type: "Testimonial",
    title: "",
    description:
      "We designed G-Connect to be easy to use and intuitive. We want to make sure that students can find study buddies quickly and easily. We also want to make sure that students can find study buddies who are compatible with them. We believe that studying with a buddy is a great way to improve academic performance, stay motivated, and make learning more enjoyable.",
    name: "Mika",
    role: "UI/UX Lead @ GDSC-PLM",
    profilePicture: "/landing-page-carousel-images/mika.png",
  },
];

export default function TestCarousel(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(autoplayOptions),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      console.log(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="w-full text-neutral-600">
      <div className="overflow-x-hidden p-4 md:p-0" ref={emblaRef}>
        <div className="mb-20 flex h-fit">
          {slidesData.map((slide, index) => {
            if (slide.type === "Testimonial") {
              return (
                <div
                  key={index}
                  className={cn(
                    "md:flex-2 lg:flex-3 mx-6 h-fit w-1/2 flex-1 rounded-2xl bg-indigo-50 p-8 shadow-xl transition-all duration-300 ease-in-out",
                    selectedIndex === index &&
                      "bg-indigo-200 transition-all duration-300 ease-in-out",
                  )}
                >
                  <p className="mb-10">&rdquo;{slide.description}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="ml-4 text-neutral-800">
                      <h1 className="font-semibold">{slide.name}</h1>
                      <p>{slide.role}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div
                key={index}
                className={cn(
                  "md:flex-2 lg:flex-3 mx-6 h-fit w-1/2 flex-1 rounded-2xl bg-indigo-50 p-8 shadow-xl transition-all duration-300 ease-in-out",
                  selectedIndex === index && "bg-indigo-200",
                )}
              >
                <h1 className="mb-4 text-xl font-medium text-orange-400">
                  G-Connect&apos;s{" "}
                  <span className="text-neutral-600">{slide.title}</span>
                </h1>
                <p className="mb-10">{slide.description}</p>
                <Image
                  src="gconnect-logo.svg"
                  alt="G-Connect Logo"
                  width={50}
                  height={50}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
