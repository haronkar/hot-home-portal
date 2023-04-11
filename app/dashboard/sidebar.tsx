import {
  faList,
  faHome,
  faSignOut,
  faTreeCity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div className="ml-4 py-5 h-full w-full grid grid-rows-4 place-content-center rounded-2xl bg-foreground text-backroundDark">
      <FontAwesomeIcon
        className=" justify-self-center text-3xl mt-5"
        icon={faTreeCity}
      />
      <ul className="flex gap-8 flex-col mt-6 items-center md:items-start row-span-2 text-xl md:text-base">
        <li className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faHome} />
          <span className="hidden md:block">Home</span>
        </li>
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
