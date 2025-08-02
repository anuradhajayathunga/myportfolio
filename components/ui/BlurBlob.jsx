// "use client";
// import React from "react";
// import clsx from "clsx";

// const BlurBlob = ({
//   className = "",
//   size = 505,
//   lightOpacity = 0.3,
//   darkOpacity = 0.5,
//   position = "center", // options: center, top-left, etc.
// }) => {
//   const positions = {
//     center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
//     "top-left": "top-0 left-0",
//     "bottom-right": "bottom-0 right-0",
//     "top-right": "top-0 right-0",
//     "bottom-left": "bottom-0 left-0",
//   };

//   return (
//     <div
//       className={clsx(
//         "absolute -z-10 blur-3xl",
//         positions[position],
//         className
//       )}
//       style={{ width: size, height: size }}
//     >
//       <svg
//         width={size}
//         height={size}
//         viewBox="0 0 505 505"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full"
//       >
//         <defs>
//           <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#3479e9" />
//             <stop offset="100%" stopColor="#181818" />
//           </linearGradient>
//         </defs>
//         <path
//           d="M414.573 43.0779C455.283 71.8338 484.948 116.39 497.571 164.106C509.879 212.137 505.461 263.329 494.731 317.365C483.686 371.401 466.013 427.965 427.827 462.093C389.642 496.537 330.312 508.545 274.454 504.121C218.595 499.697 165.893 478.525 125.814 445.029C85.4189 411.217 57.6476 364.765 33.9788 312.309C10.31 259.853 -9.25622 201.077 4.62947 151.466C18.1996 101.538 64.906 60.7738 114.768 34.8619C164.946 9.26592 217.964 -1.16205 270.351 0.101944C322.738 1.36594 374.178 14.3219 414.573 43.0779Z"
//           className="transition-all duration-500"
//           style={{
//             fill: "#60A5FA",
//             opacity: lightOpacity,
//           }}
//         />
//         <style>
//           {`
//             @media (prefers-color-scheme: dark) {
//               .dark blob-path {
//                 fill: url(#blobGradient);
//                 opacity: ${darkOpacity};
//               }
//             }
//           `}
//         </style>
//       </svg>
//     </div>
//   );
// };

// export default BlurBlob;
"use client";
import React from "react";

const BlurBlob = ({
  className = "",
  size = 505,
  lightOpacity = 0.25,
  darkOpacity = 0.25,
  position = "center",
  variant = "primary", // primary, secondary, accent, gradient
  animated = false,
}) => {
  const positions = {
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "top-right": "top-0 right-0 -translate-y-1/4",//translate-x-1/4 
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
    "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  };

  // Professional gradient combinations
  const gradients = {
    primary: {
      light: ["#3B82F6", "#1E40AF"], // Blue gradient
      dark: ["#60A5FA", "#2563EB"],
    },
    secondary: {
      light: ["#8B5CF6", "#7C3AED"], // Purple gradient
      dark: ["#A78BFA", "#8B5CF6"],
    },
    accent: {
      light: ["#06B6D4", "#0891B2"], // Cyan gradient
      dark: ["#22D3EE", "#06B6D4"],
    },
    gradient: {
      light: ["#3B82F6", "#8B5CF6", "#06B6D4"], // Multi-color gradient
      dark: ["#60A5FA", "#A78BFA", "#22D3EE"],
    },
    warm: {
      light: ["#F59E0B", "#ffffff"], // Orange to red EF4444
      dark: ["#FCD34D", "#181818"], //F87171
    },
    cool: {
      light: ["#10B981", "#06B6D4"], // Green to cyan
      dark: ["#34D399", "#22D3EE"],
    },
  };

  const currentGradient = gradients[variant] || gradients.primary;
  const gradientId = `blobGradient-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={`absolute -z-10 ${positions[position]} ${className} ${
        animated ? "animate-pulse" : ""
      }`}
      style={{ 
        width: size, 
        height: size,
        filter: "blur(60px)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 505 505"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${animated ? "animate-spin" : ""}`}
        style={{ 
          animationDuration: animated ? "20s" : "0s",
          animationDirection: "reverse",
        }}
      >
        <defs>
          {/* Light mode gradient */}
          <linearGradient id={`${gradientId}-light`} x1="0%" y1="0%" x2="100%" y2="100%">
            {currentGradient.light.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (currentGradient.light.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
          
          {/* Dark mode gradient */}
          <linearGradient id={`${gradientId}-dark`} x1="0%" y1="0%" x2="100%" y2="100%">
            {currentGradient.dark.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (currentGradient.dark.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>

          {/* Radial gradient for more organic look */}
          <radialGradient id={`${gradientId}-radial-light`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={currentGradient.light[0]} stopOpacity={lightOpacity} />
            <stop offset="70%" stopColor={currentGradient.light[1]} stopOpacity={lightOpacity * 0.7} />
            <stop offset="100%" stopColor={currentGradient.light[1]} stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`${gradientId}-radial-dark`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={currentGradient.dark[0]} stopOpacity={darkOpacity} />
            <stop offset="70%" stopColor={currentGradient.dark[1]} stopOpacity={darkOpacity * 0.7} />
            <stop offset="100%" stopColor={currentGradient.dark[1]} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Main blob shape */}
        <path
          d="M414.573 43.0779C455.283 71.8338 484.948 116.39 497.571 164.106C509.879 212.137 505.461 263.329 494.731 317.365C483.686 371.401 466.013 427.965 427.827 462.093C389.642 496.537 330.312 508.545 274.454 504.121C218.595 499.697 165.893 478.525 125.814 445.029C85.4189 411.217 57.6476 364.765 33.9788 312.309C10.31 259.853 -9.25622 201.077 4.62947 151.466C18.1996 101.538 64.906 60.7738 114.768 34.8619C164.946 9.26592 217.964 -1.16205 270.351 0.101944C322.738 1.36594 374.178 14.3219 414.573 43.0779Z"
          className="transition-all duration-1000 ease-in-out dark:hidden"
          fill={`url(#${gradientId}-radial-light)`}
        />

        <path
          d="M414.573 43.0779C455.283 71.8338 484.948 116.39 497.571 164.106C509.879 212.137 505.461 263.329 494.731 317.365C483.686 371.401 466.013 427.965 427.827 462.093C389.642 496.537 330.312 508.545 274.454 504.121C218.595 499.697 165.893 478.525 125.814 445.029C85.4189 411.217 57.6476 364.765 33.9788 312.309C10.31 259.853 -9.25622 201.077 4.62947 151.466C18.1996 101.538 64.906 60.7738 114.768 34.8619C164.946 9.26592 217.964 -1.16205 270.351 0.101944C322.738 1.36594 374.178 14.3219 414.573 43.0779Z"
          className="transition-all duration-1000 ease-in-out hidden dark:block"
          fill={`url(#${gradientId}-radial-dark)`}
        />

        {/* Additional smaller blob for depth */}
        <circle
          cx="250"
          cy="200"
          r="80"
          className="transition-all duration-1000 ease-in-out dark:hidden"
          fill={`url(#${gradientId}-radial-light)`}
          opacity={lightOpacity * 0.5}
        />

        <circle
          cx="250"
          cy="200"
          r="80"
          className="transition-all duration-1000 ease-in-out hidden dark:block"
          fill={`url(#${gradientId}-radial-dark)`}
          opacity={darkOpacity * 0.5}
        />
      </svg>
    </div>
  );
};
export default BlurBlob;