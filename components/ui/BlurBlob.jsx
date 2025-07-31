"use client";
import React from "react";
import clsx from "clsx";

const BlurBlob = ({
  className = "",
  size = 505,
  lightOpacity = 0.3,
  darkOpacity = 0.5,
  position = "center", // options: center, top-left, etc.
}) => {
  const positions = {
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  return (
    <div
      className={clsx(
        "absolute -z-10 blur-3xl",
        positions[position],
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 505 505"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3479e9" />
            <stop offset="100%" stopColor="#181818" />
          </linearGradient>
        </defs>
        <path
          d="M414.573 43.0779C455.283 71.8338 484.948 116.39 497.571 164.106C509.879 212.137 505.461 263.329 494.731 317.365C483.686 371.401 466.013 427.965 427.827 462.093C389.642 496.537 330.312 508.545 274.454 504.121C218.595 499.697 165.893 478.525 125.814 445.029C85.4189 411.217 57.6476 364.765 33.9788 312.309C10.31 259.853 -9.25622 201.077 4.62947 151.466C18.1996 101.538 64.906 60.7738 114.768 34.8619C164.946 9.26592 217.964 -1.16205 270.351 0.101944C322.738 1.36594 374.178 14.3219 414.573 43.0779Z"
          className="transition-all duration-500"
          style={{
            fill: "#60A5FA",
            opacity: lightOpacity,
          }}
        />
        <style>
          {`
            @media (prefers-color-scheme: dark) {
              .dark blob-path {
                fill: url(#blobGradient);
                opacity: ${darkOpacity};
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default BlurBlob;
