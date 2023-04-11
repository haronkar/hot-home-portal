import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="w-full py-10 px-10 bg-foreground flex justify-between items-center text-background overflow-hidden">
        <Link className="text-lg flex-initial" href={"./"}>
          <FontAwesomeIcon
            className="text-accentColor"
            icon={faHouseCircleCheck}
            size="xl"
          />
          <span className="font-semibold ml-2">HotHome</span>
        </Link>
        <div className="flex-auto">
          <h1 className="text-center text-backroundDark text-xs">
            <FontAwesomeIcon className="mr-2" icon={faCopyright} />
            2023 HotHome Inc.
          </h1>
        </div>
        <div className="px-2 py-1 flex-initial flex gap-5">
          <Link href={"https://twitter.com/"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href={"https://facebook.com/"}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href={"https://instagram.com/"}>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
    </div>
  );
}
