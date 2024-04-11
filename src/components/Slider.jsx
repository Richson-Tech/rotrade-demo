"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/one.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/two.jpg",
  },
  {
      id: 3,
      topic:"FURNITURE",
    title: "Better interiors",
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
    <div className="relative flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-[#facc15]">
      {/* TEXT CONTAINER  */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-black font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-[#00A082] text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER  */}
      <div className="w-full flex-1 absolute">
        <Image
          src={data[currentSlide].image}
          alt="slider for image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
