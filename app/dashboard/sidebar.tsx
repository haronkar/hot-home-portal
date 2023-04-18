import {
  faList,
  faHome,
  faSignOut,
  faHouseCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="ml-4 py-5 h-full w-full grid grid-rows-4 place-content-center rounded-2xl bg-foreground text-backroundDark">
      <Link
        href={"#"}
        className=" justify-self-center text-accentColor text-3xl mt-5">
        <FontAwesomeIcon icon={faHouseCircleCheck} />
      </Link>
      <ul className="flex gap-8 flex-col mt-6 items-center md:items-start row-span-2 text-xl md:text-base">
        <Link href={"./dashboard"} className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faHome} />
          <span className="hidden md:block">Home</span>
        </Link>
        <li className="flex gap-0 items-center md:gap-3">
          <FontAwesomeIcon icon={faList} />
          <span className="hidden md:inline">Listing</span>
        </li>
      </ul>
      <div className="justify-self-center place-self-end mb-4">
        <FontAwesomeIcon icon={faSignOut} size="xl" />
      </div>
    </div>
  );
}
