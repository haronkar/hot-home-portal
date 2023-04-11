import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Pill({
  text,
  linkTo = "#",
  className = "",
}: {
  text: string;
  linkTo?: string;
  className?: string;
}) {
  return (
    <Link href={linkTo} className={`${className} rounded-full px-4 py-2`}>
      {text}
      <FontAwesomeIcon className="-rotate-45 ml-2 " icon={faArrowRight} />
    </Link>
  );
}
