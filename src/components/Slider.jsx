"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    topic: "FURNITURE",
    title: "Beauty indoors",
    last: "The perfect place for every contemporary furniture store and manufacturer. This is Umeà.",
    image: "/one.jpg",
  },
  {
    id: 2,
    topic: "FURNITURE",
    title: "Superior living",
    last: "The perfect plcontemporary macure anC",
    image: "/two.jpg",
  },
  {
    id: 3,
    topic: "FURNITURE",
    title: "Better interiors",
    last: "The perfect place for every contemporary furniture store and manufacturer This is I Imea",
    image: "/three.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col h-36 w-96 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* IMAGE CONTAINER  */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt="slider for image"
          layout="responsive"
          width={1920}
          height={1080} // Adjust this value based on your image aspect ratio
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full mt-20 text-center">
          <p className="text-white text-lg pl-12 pr-12 pt-5 font-roboto">
            {" "}
            {data[currentSlide].topic}
          </p>
          <h2 className="text-white text-4xl font-bold text-center pl-22 pr-22 pt-5">
            {data[currentSlide].title}
          </h2>
          <p className="text-white text-lg font-serif text-center pl-12 pr-12 pt-5">
            {data[currentSlide].last}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
