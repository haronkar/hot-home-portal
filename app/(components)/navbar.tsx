import { faHouseCircleCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-full p-5 fixed top-0 left-0 z-50 grid place-items-center">
      <div className="w-[50rem] py-3 px-10 bg-foreground flex justify-between items-center text-background rounded-xl overflow-hidden">
        <Link className="text-sm flex-initial" href={"./"}>
          <FontAwesomeIcon
            className="text-accentColor"
            icon={faHouseCircleCheck}
            size="xl"
          />
          <span className="font-semibold ml-2">HotHome</span>
        </Link>
        <div className="flex-auto">
          <ul className="flex justify-center gap-5 -ml-[4.5rem] text-sm text-background/80">
            <Link href={"./houses"}>
              <li className="hover:text-accentColor transition-all duration-150">
                Buy
              </li>
            </Link>
            <Link href={"./sell"}>
              <li className="hover:text-accentColor transition-all duration-150">
                Sell
              </li>
            </Link>
          </ul>
        </div>
        <div className="border px-2 py-1 text-sm rounded-full flex-initial">
          <Link href={"./dashboard"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </div>
  );
}
