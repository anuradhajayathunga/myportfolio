"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const BlobAvatars = ({ reviewData, activeIndex }) => {
  const positions = [
    { position: "top-0 left-0", scale: 1 },
    { position: "top-10 right-0", scale: 0.9 },
    { position: "bottom-10 left-10", scale: 1.1 },
    { position: "bottom-0 right-5", scale: 0.95 },
  ];

  // Generate random rotation angles once
  const [rotations] = useState(() =>
    Array.from({ length: positions.length }, () => Math.floor(Math.random() * 360))
  );

  return (
    <div className="relative w-full h-full">
      {reviewData.slice(0, positions.length).map((person, index) => {
        const positionData = positions[index];
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={person.name}
            className={`absolute ${positionData.position}`}
            animate={{
              y: [0, -10, 0],
              scale: isActive ? positionData.scale * 1.1 : positionData.scale,
              rotate: rotations[index],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              scale: { duration: 0.4, ease: "easeOut" },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            <svg
              width="90"
              height="90"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl"
            >
              <defs>
                <pattern
                  id={`avatar-pattern-${index}`}
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href={person.image}
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    height="100%"
                  />
                </pattern>
              </defs>

              {/* Blob Path (your custom shape) */}
              <path
                d="M62.4,-66.9C77.1,-51.4,84.2,-25.7,82.3,-2.2C80.5,21.2,69.7,42.4,55,60.7C40.3,79,21.7,94.3,-1.5,96.3C-24.7,98.2,-49.4,86.8,-65.4,68.6C-81.3,50.3,-88.5,25.1,-86.4,2.5C-84.3,-20.1,-72.9,-40.2,-56.7,-56.3C-40.4,-72.4,-20.2,-84.4,2.4,-87.2C25.1,-89.9,50.2,-83.3,62.4,-66.9Z"
                transform="translate(100 100)"
                fill={`url(#avatar-pattern-${index})`}
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BlobAvatars;
