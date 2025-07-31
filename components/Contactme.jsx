import BlurBlob from "./ui/BlurBlob";
import { Button } from "./ui/button";
import Link from "next/link";
const Contactme = () => {
  return (
    <section className=" lg:px-8 xl:px-[8%] -mb-6 mt-12">
      <div className=" p-10 flex flex-col items-center backdrop-blur-lg bg-white/30 dark:bg-black/50 shadow-md z-30">
        {/* <BlurBlob size={300} lightOpacity={0.3} darkOpacity={0.5} /> */}

        <h2 className="text-4xl font-bold text-light-text dark:text-dark-text max-w-[700px] text-center mb-4">
          Prepared to turn your ideas into reality? I'm here to help you.
        </h2>
        <Link href="/contact">
          <Button className="">Contact Me</Button>
        </Link>
      </div>
    </section>
  );
};

export default Contactme;
