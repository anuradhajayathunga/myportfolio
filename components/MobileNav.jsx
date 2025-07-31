import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import ThemeTogggler from "./ThemeTogggler";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-left justify-between h-full pb-8">
          <div className="hidden xl:flex xl:flex-col xl:items-start xl:justify-start xl:pl-4 xl:pt-4">
            <ThemeTogggler />
          </div>
          <div className="xl:hidden -mt-[15px] -ml-[10px]">
            <ThemeTogggler />
          </div>
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-left gap-y-6 mt-5"
              linkStyles="text-2xl"
            />
          </div>
          <Socials
            containerStyles="flex justify-center items-center gap-x-4 mb-2"
            linkStyles="text-3xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
