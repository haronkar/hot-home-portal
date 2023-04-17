"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Map from "@/app/(components)/map";
import Footer from "@/app/(components)/footer";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import Loading from "@/app/(components)/Loading";

type PageProps = {
  id: string;
  url: string;
};

export default function Page({ params }: { params: { slug?: string } }) {
  const [data, setData] = useState<DocumentData>();
  const [images, setImages] = useState<PageProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/getPostOne`, {
          method: "POST",
          body: JSON.stringify({ id: params.slug }),
        });
        const dataRaw = await res.json();

        const resImage = await fetch(`/api/getImages`, {
          method: "POST",
          body: JSON.stringify({ id: dataRaw.MLS }),
        });

        const rawImages = await resImage.json();

        setData(dataRaw);
        setImages(rawImages);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen">
      {loading ? (
        <div className="pt-20 px-10 h-full grid place-items-center">
          <Loading />
        </div>
      ) : (
        <div className="p-5 mb-80">
          <div className="relative pt-20 px-10 bg-foreground text-background pb-10 rounded-2xl">
            <h1 className="flex gap-2 items-center mb-5">
              <FontAwesomeIcon icon={faArrowLeft} />
              <Link href={"../../houses"}>Back</Link>
            </h1>
            <div className="grid grid-cols-4 grid-rows-2 gap-3">
              {images.length > 0 && (
                <Image
                  src={images[0].url}
                  alt={images[0].id}
                  className="object-cover rounded-lg col-span-2 row-span-2 w-full h-full"
                  width={500}
                  height={500}
                />
              )}
              {/* Render the next four images on the right */}
              {images.slice(1, 5).map((image: { id: string; url: string }) => (
                <Image
                  key={image.id}
                  src={image.url}
                  alt={image.id}
                  className="object-cover rounded-lg col-span-1 w-full h-full"
                  width={500}
                  height={500}
                />
              ))}
            </div>
            <div className="">
              <h2 className="text-4xl font-medium tracking-wide mt-10">
                {data?.Address}
              </h2>
              <h2 className=" text-xl opacity-70 mt-3">{data?.City}</h2>
            </div>
            <div className="absolute right-14 -bottom-48 bg-foreground p-10 w-fit border-4 border-background rounded-2xl">
              <h2 className="text-background/50 text-sm">PRICE</h2>
              <h1 className="text-3xl">
                CAD {parseInt(data?.Price).toLocaleString()}
              </h1>
              <div className="mt-7 px-4 py-2 bg-accentColor rounded-xl">
                <h2 className="text-foreground/50 uppercase text-xs">
                  Listing Agent
                </h2>
                <h2 className="font-medium text-foreground">HotHome Inc.</h2>
                <h2 className="text-foreground font-light">email@email.com</h2>
              </div>
              <Link
                href={""}
                className="bg-background rounded-full w-fit px-8 py-4 text-foreground mt-7 flex gap-4 items-center">
                <FontAwesomeIcon icon={faArrowRight} />
                Contact Agent
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="px-10 mt-10 ">
            <h1 className="text-4xl ">About This Home</h1>

            <h2 className=" mt-5 leading-loose font-light w-1/2">
              {data?.Description}
            </h2>
          </div>

          <div className="px-10 mt-20">
            <h1 className="text-4xl mb-10">Facts & Features</h1>
            <div className="grid grid-cols-3 gap-y-10 w-5/6">
              <div className="text-lg">
                <h1 className="text-foreground/50">{"Property Type"}</h1>
                <h2 className="font-medium mt-2">{data?.Type}</h2>
              </div>
              <div className="text-lg">
                <h1 className="text-foreground/50">{"Bed/Bath"}</h1>
                <h2 className="font-medium mt-2">{`${data?.Bed}/${data?.Bath}`}</h2>
              </div>
              <div className="text-lg">
                <h1 className="text-foreground/50">{"MLS#"}</h1>
                <h2 className="font-medium mt-2">{data?.MLS}</h2>
              </div>
              <div className="text-lg">
                <h1 className="text-foreground/50">{"Flooring"}</h1>
                <h2 className="font-medium mt-2">{data?.Flooring}</h2>
              </div>
              <div className="text-lg">
                <h1 className="text-foreground/50">{"Year Built"}</h1>
                <h2 className="font-medium mt-2">{data?.Year_Built}</h2>
              </div>
              <div className="text-lg">
                <h1 className="text-foreground/50">{"Time on HotHome"}</h1>
                <h2 className="font-medium mt-2">{"9 Hours"}</h2>
              </div>
            </div>
          </div>

          <div className="relative pt-20 px-10 bg-foreground text-background pb-10 rounded-2xl mt-24">
            <h1 className="text-center text-4xl mb-20">Property Details</h1>
            <div className="grid grid-cols-3 gap-y-10 w-3/4 m-auto pb-20">
              <div className="text-lg rounded-2xl">
                <h1 className="text-background/50">{"Cooling"}</h1>
                <h2 className="font-medium mt-2">{data?.Cooling}</h2>
              </div>
              <div className="text-lg rounded-2xl">
                <h1 className="text-background/50">{"Heating"}</h1>
                <h2 className="font-medium mt-2">{data?.Heating}</h2>
              </div>
              <div className="text-lg rounded-2xl">
                <h1 className="text-background/50">{"Appliances"}</h1>
                <h2 className="font-medium mt-2">{data?.Appliances}</h2>
              </div>
              <div className="text-lg rounded-2xl">
                <h1 className="text-background/50">{"Parking"}</h1>
                <h2 className="font-medium mt-2">{data?.Parking}</h2>
              </div>
              <div className="text-lg rounded-2xl">
                <h1 className="text-background/50">{"Basement"}</h1>
                <h2 className="font-medium mt-2">{data?.Basement}</h2>
              </div>
              <div className="text-lg rounded-2xl">
                <h1 className="text-background/50">{"Lot Size"}</h1>
                <h2 className="font-medium mt-2">{`${data?.Lot} sqft`}</h2>
              </div>
            </div>

            <h1 className="text-center text-4xl pb-40">Location address</h1>
            <div className="absolute left-1/2 -translate-x-1/2 top-[80%] bg-foreground border-4 border-background rounded-2xl w-3/4 overflow-hidden h-96 text-foreground">
              <Map address="468 Fairview Heights Dr" />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
