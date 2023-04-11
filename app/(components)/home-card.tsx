import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function HomeCard({
  image,
  heading,
  subheading,
  linkTo = "#",
}: {
  image: StaticImageData;
  heading: string;
  subheading: string;
  linkTo?: string;
}) {
  return (
    <div className="p-3 bg-foreground text-background text-sm rounded-2xl">
      <div className=" flex justify-between items-center py-2">
        <div className="p-2">
          <h2>{heading}</h2>
          <h3 className="text-background/70 text-xs">{subheading}</h3>
        </div>
        <Link
          href={linkTo}
          className="bg-accentColor text-foreground rounded-full px-4 py-3">
          <FontAwesomeIcon className="-rotate-45" icon={faArrowRight} />
        </Link>
      </div>
      <div className="w-full overflow-hidden max-h-48 rounded-xl">
        <Image
          className="object-cover object-center"
          src={image}
          width={500}
          height={500}
          alt={"card"}
        />
      </div>
    </div>
  );
}
