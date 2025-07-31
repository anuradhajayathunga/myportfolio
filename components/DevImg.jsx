import Image from "next/image";

const DevImg = ({ containerStyles, lightbg, bg, imgSrc }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      {/* Background blob layer */}
      {/* Light mode background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom opacity-30  z-[-1] dark:hidden"
        style={{
          backgroundImage: `url(${lightbg})`,
          backgroundSize: "contain",
        }}
      />

      {/* Dark mode background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom opacity-50   z-[-1] hidden dark:block"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain" }}
      />

      {/* Blurred background "shadow" image */}
      <Image
        src={imgSrc}
        alt="Blurred Shadow"
        fill
        priority
        className="object-contain blur-3xl scale-90 opacity-50 z-0"
      />

      {/* Foreground image */}
      <Image
        src={imgSrc}
        alt="Developer"
        fill
        priority
        className="object-contain z-10"
      />
    </div>
  );
};

export default DevImg;
