"use client";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div
      className={` ${containerStyles} flex items-center p-2 md:p-4 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/30 shadow-xl z-20`}
    >
      {/* Icon Section */}
      <div className="mr-2 text-xs md:text-3xl text-primary">{icon}</div>

      {/* Content Section */}
      <div className="flex items-center flex-1 overflow-hidden">
        {/* CountUp Component */}
        <div className="mr-2 text-xs font-bold leading-none text-black md:text-4xl dark:text-white">
          <CountUp
            start={0} // Optional: Specify a starting number (default is 0)
            end={endCountNum}
            duration={3} // Duration in seconds
            delay={0.5} // Optional: Delay in seconds before animation starts
            redraw={true} // Optional: Redraw component on props change (default is false)
          />
          {endCountText}
        </div>

        {/* Badge Text */}
        <div className="text-black dark:text-white max-w-[800px] leading-none text-xs md:text-sm font-semibold">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
