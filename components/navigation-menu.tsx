"use client";

import Link from "next/link";
import TranslatableContext from "./translatable-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";

const NavigationMenu = () => {
  return (
    <div>
      <div className="flex font-medium text-lg max-sm:hidden">
        <TranslatableContext className="p-2">
          <Link href={"/about"}>About</Link>
        </TranslatableContext>
        <TranslatableContext className="p-2">
          <Link href={"/works"}>Works</Link>
        </TranslatableContext>
        <TranslatableContext className="p-2">
          <Link href={"/connect"}>Connects</Link>
        </TranslatableContext>
      </div>
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <TranslatableContext className="w-10 h-10 p-2">
                <FiMenu className="text-2xl" />
              </TranslatableContext>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={"/about"}>About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/works"}>Works</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/connect"}>Connects</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavigationMenu;
