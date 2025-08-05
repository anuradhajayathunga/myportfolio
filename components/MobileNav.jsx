import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import ThemeTogggler from "./ThemeTogggler";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer text-[28px]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between px-6 pt-2 md:pt-1 pb-10">
        {/* Top Section */}
        <div className="flex items-center justify-between mr-6 md:pr-6 ">
          <Logo />
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <ThemeTogggler />
          </div>
        </div>

        {/* Middle Section */}
        <div className="mt-12">
          <Nav
            containerStyles="sticky flex flex-col gap-6 items-start "
            linkStyles="relative text-xl font-medium hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 transition-colors"
            closeComponent={SheetClose} // pass close component
          />
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          <Socials
            containerStyles="flex justify-center gap-5"
            linkStyles="text-2xl hover:text-primary transition-colors"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;