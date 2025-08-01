import BlurBlob from "./ui/BlurBlob";
import { Button } from "./ui/button";
import Link from "next/link";
const Contactme = () => {
  return (
    <section className=" lg:px-8 xl:px-[8%] -mb-6 mt-12">
      <div className="z-30 flex flex-col items-center p-10 shadow-md backdrop-blur-lg bg-white/30 dark:bg-black/50">
        {/* <BlurBlob position="bottom-right" size={500} lightOpacity={0.3} darkOpacity={0.1} /> */}

        <h2 className="text-4xl font-bold text-light-text dark:text-dark-text max-w-[700px] text-center mb-4">
          Prepared to turn your ideas into reality? I'm here to help you.
        </h2>
        {/* <Link href="/contact">
          <Button className="">Contact Me</Button>
        </Link> */}
        <div className="flex max-w-lg p-2 mx-auto mt-8 border rounded-full border-black/15">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 bg-transparent rounded-full md:flex-1 focus:outline-none focus:ring-2 focus:ring-light-primary/20 dark:focus:ring-dark-primary/50"
          />

          <Button variant="link" className="whitespace-nowrap">
            <Link href="/contact">Sign Up</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
