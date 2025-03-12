'use client'

import { useState, useEffect, useRef } from "react";

export default function SlideShow({ images }) {
  let currIndex = 0;
  const [index, setIndex] = useState(currIndex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextIndex = currIndex + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      currIndex = nextIndex;
      setIndex(nextIndex);
    }, 3000);

  }, [])

  return (
    <>
      <div className="relative size-full">
        {images.map((img, i) => {
          return (
            <img
              key={i}
              className={`slideshow-image absolute size-full ${index == i ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
              src={img}
              alt={`images ${i}`}
            />
          );
        })}
      </div>
    </>
  );
}