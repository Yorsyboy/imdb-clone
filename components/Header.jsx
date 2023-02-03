import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, InformationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} address="/" title="HOME" />
        <HeaderIcon
          Icon={InformationCircleIcon}
          address="/about"
          title="ABOUT"
        />
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
