import ThemeProvider from "./theme-provider";
import Image from "next/image";
import dong_logo from "@/public/dong-logo.svg";
import NavigationMenu from "./navigation-menu";

const Navbar = () => (
  <div className="flex justify-between place-items-center mx-10 mt-4 max-sm:mx-6">
    <Image
      src={dong_logo}
      alt="dong-logo"
      width={4000}
      height={1000}
      className="w-max h-5 ring-0 dark:invert"
    />
    <div className="flex place-items-center">
      <ThemeProvider />
      <NavigationMenu />
    </div>
  </div>
);

export default Navbar;
