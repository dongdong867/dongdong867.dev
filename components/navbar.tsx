import ThemeProvider from "./theme-provider";
import Image from "next/image";
import dong_logo from "@/public/dong-logo.svg";
import TranslatableContextButton from "./translatable-context-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const Navbar = () => (
  <div className="flex justify-between place-items-center mx-10 mt-4">
    <Image
      src={dong_logo}
      alt="dong-logo"
      width={2000}
      height={2000}
      className="w-max h-5 ring-0 dark:invert"
    />
    <div className="flex place-items-center space-x-4">
      <ThemeProvider />
      {/* <TranslatableContextButton className="text-xl p-3"> */}
      {/* <Link href={"/about"}>About</Link> */}
      <AlertDialog>
        <AlertDialogTrigger>About</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>This page is still building.</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* </TranslatableContextButton> */}
      {/* <TranslatableContextButton className="text-xl p-3"> */}
      {/* <Link href={"/works"}>Works</Link> */}
      <AlertDialog>
        <AlertDialogTrigger>Works</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>This page is still building.</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* </TranslatableContextButton> */}
      {/* <TranslatableContextButton className="text-xl p-3"> */}
      {/* <Link href={"/connect"}>Connect</Link> */}
      <AlertDialog>
        <AlertDialogTrigger>Connect</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>This page is still building.</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* </TranslatableContextButton> */}
    </div>
  </div>
);

export default Navbar;
