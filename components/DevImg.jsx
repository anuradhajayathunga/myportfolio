import Image from "next/image";

const DevImg = ({ containerStyles, lightbg, bg, imgSrc }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      {/* Background blob layer */}
      {/* Light mode background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom opacity-40   -z-10 dark:hidden"
        style={{
          backgroundImage: `url(${lightbg})`,
          backgroundSize: "contain",
        }}
      />

      {/* Dark mode background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom opacity-30     -z-10 hidden dark:block"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain" }}
      />

      {/* Blurred background "shadow" image */}
      <Image
        src={imgSrc}
        alt="Blurred Shadow"
        fill
        priority
        className="object-contain blur-3xl opacity-50 dark:opacity-30 scale-105  z-20"
      />

      {/* Foreground image */}
      <Image
        src={imgSrc}
        alt="Developer"
        fill
        priority
        className="object-contain z-20"
      />
    </div>
  );
};

export default DevImg;
