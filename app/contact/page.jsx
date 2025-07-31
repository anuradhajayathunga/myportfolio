import { MailIcon, HomeIcon, PhoneCallIcon, LocateIcon } from "lucide-react";
//components
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        {/* text  & illus*/}
        <div className="grid xl:grid-cols-2 pt-2 xl:h-[400px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>

              <div className="text-sm uppercase font-semibold mb-0 text-black tracking-[2px] dark:text-white">
                Say Hello,
              </div>

              <span className="w-[30px] h-[2px] bg-primary"></span>
            </div>

            <h1 className="h1  max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* illustration */}
          <div className="w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* text & info */}
        <div className="grid xl:grid-cols-2 mb-0 xl:mb-0 xl:gap-x-10">
          {/* form */}
          <Form />
          {/* text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-5 mb-12 xl:p-24 xl:text-lg">
            {/*  */}
            <div className="flex items-center gap-x-8">
              <MailIcon
                size={50}
                className="text-primary bg-[#fef9f5]  rounded-full p-3"
              />
              <div className="text-sm font-semibold">
                ishiwaraanuradha@gmail.com
              </div>
            </div>

            {/*  */}
            {/* <div className="flex items-center gap-x-8">
              <LocateIcon
                size={50}
                className="text-primary bg-[#fef9f5]  rounded-full p-3"
              />
              <div className="text-sm font-semibold">
                No 32 malwattagame,kurunduwatta.
              </div>
            </div> */}

            {/*  */}
            <div className="flex items-center gap-x-8">
              <PhoneCallIcon
                size={50}
                className="text-primary bg-[#fef9f5]  rounded-full p-3"
              />
              <div className="text-sm font-semibold">+94 759-089-188 </div>
              {/* <div className="text-sm font-semibold">+94 743-119-199 </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
