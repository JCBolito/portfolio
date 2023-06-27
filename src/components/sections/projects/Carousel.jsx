"use client";
import { useState } from "react";
import Image from "next/image";
export default function Carousel({ imageDirectory, images }) {
  const [imageState, setImageState] = useState(0);
  return (
    <div className="relative">
      <Image
        src={imageDirectory + images[imageState]}
        alt=""
        width={448}
        height={237}
        className="w-full"
      />
      <div className="absolute bottom-2 mx-auto flex w-full justify-center gap-1">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => setImageState(index)}
              className={`h-4 w-4 rounded-full border-2 border-white transition-all ${
                imageState == index ? "bg-white" : ""
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
