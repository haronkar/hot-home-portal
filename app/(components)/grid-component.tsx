import {
  faBath,
  faBed,
  faDoorOpen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Item {
  id: string;
  imageUrl: string;
  data: DocumentData;
}

interface Props {
  items: Item[];
}

export default function GridComponent({ items }: Props) {
  const gridItems = items.map((item) => (
    <Link
      href={`./housedetail/${item.id}`}
      key={item.id}
      className="w-full md:w-1/2 lg:w-1/4 p-4 ">
      <div className="bg-foreground text-background text-sm rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="w-full overflow-hidden h-52 p-3 pb-0 relative">
          <Image
            className="h-full object-cover object-center rounded-t-xl"
            src={item.imageUrl}
            width={500}
            height={500}
            alt={"card"}
          />
          <div className="absolute bottom-0 flex gap-2 w-full pb-1 pl-2">
            <div className="flex items-center gap-2 bg-foreground/80 rounded-2xl py-2 px-3">
              <FontAwesomeIcon icon={faBed} size={"xs"} />
              <h2 className="text-xs">{item.data.Bed}</h2>
            </div>
            <div className="flex items-center gap-2 bg-foreground/80 rounded-2xl py-2 px-3">
              <FontAwesomeIcon icon={faBath} />
              <h2 className="text-xs">{item.data.Bath}</h2>
            </div>
            <div className="flex items-center gap-2 bg-foreground/80 rounded-2xl py-2 px-3">
              <FontAwesomeIcon icon={faDoorOpen} />
              <h2 className="text-xs">{item.data.Type}</h2>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3 className="text-background/70 text-xs">{item.data.City}</h3>
            </div>
            <h3 className="text-background/70 text-[.65rem]">
              MLS® {item.data.MLS}
            </h3>
          </div>
          <div className="my-1">
            <h2 className="font-bold text-lg">
              CAD {parseInt(item.data.Price).toLocaleString()}
            </h2>
            <h2 className="opacity-70">{item.data.Address}</h2>
          </div>
        </div>
      </div>
    </Link>
  ));

  return <div className="flex flex-wrap -mx-4 px-10">{gridItems}</div>;
}
