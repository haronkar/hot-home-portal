"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import heroImg from "./(assets)/architecture25.jpeg";
import image1 from "./(assets)/architecture28.jpeg";
import image2 from "./(assets)/architecture78.jpeg";
import sign1 from "./(assets)/architecture102.jpeg";
import sign2 from "./(assets)/architecture51.jpeg";
import sign3 from "./(assets)/architecture83.jpeg";
import HomeCard from "./(components)/home-card";
import Pill from "./(components)/link-pill";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({ city: city });
    const url = `/houses?${params.toString()}`;
    window.location.href = url;
  };

  return (
    <main className="w-screen h-screen grid grid-cols-2">
      {/* Left */}
      <div className="relative aspect-auto overflow-hidden ">
        <Image
          className="w-full h-full object-cover"
          src={heroImg}
          alt={"Photo by R ARCHITECTURE on Unsplash"}
          width={1000}
          height={1000}
        />
        <div className=" absolute bottom-0 left-0 p-5 pt-20 w-full bg-gradient-to-t from-black/80 to-black/0">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Pill
                className="text-background border border-background text-xs py-1 "
                text="About us"
                linkTo="./about"
              />
              <Pill
                className="text-background border border-background text-xs py-1 "
                text="Contact"
              />
            </div>
            <div className="flex justify-center items-center text-backroundDark text-xs">
              <h1 className="mr-2">Talk with our professional</h1>
              <Pill
                className="text-background border border-background text-xs py-1 "
                text="Email"
                linkTo="mailto:email@example.com"
              />
            </div>
          </div>
          <h1 className="text-center text-backroundDark text-xs mt-4">
            <FontAwesomeIcon className="mr-2" icon={faCopyright} />
            2023 HotHome Inc.
          </h1>
        </div>
      </div>

      {/* Right */}
      <div className="pt-20 px-6 bg-backroundDark h-full overflow-hidden">
        {/* Search Bar */}
        <form className="grid place-items-center" onSubmit={handleSubmit}>
          <h1 className="text-7xl font-bold p-2 text-foreground">
            Find your home
          </h1>
          <div className="relative border w-fit border-foreground rounded-2xl px-3 mt-4">
            <input
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="text-sm p-2 outline-none w-96 bg-transparent"
              type="text"
              placeholder="Enter an Address, City, MLS#"
            />
            <button
              type="submit"
              className="border-l-2 pl-2 border-foreground/30">
              <FontAwesomeIcon icon={faSearch} size={"xs"} />
            </button>
          </div>
        </form>
        <div className="grid grid-cols-2 gap-5 p-2 mt-5 place-items-center">
          <HomeCard
            image={image1}
            heading="Buy a home"
            subheading="Houses with best price and quality"
            linkTo="./houses"
          />
          <HomeCard
            image={image2}
            heading="Sell your home"
            subheading="Sell your house for a fantastic price!"
          />

          <div className="p-3 bg-foreground text-background text-sm rounded-2xl flex justify-center gap-0 col-span-2 w-full">
            <div className="flex flex-col justify-center items-center py-2 justify-self-center flex-1">
              <div className="p-2 text-center">
                <h2 className="mb-2">Your Dream Home Awaits</h2>
                <h3 className="text-background/70 text-xs">
                  Sign in to Manage Your Search and Save Your Favorites
                </h3>
              </div>
              <Pill
                className="bg-accentColor text-foreground"
                text="Sign in"
                linkTo="#"
              />
            </div>
            <div className="overflow-hidden rounded-xl flex">
              <Image
                className="object-cover object-center h-36 w-36"
                src={sign1}
                width={500}
                height={500}
                alt={"card"}
              />
              <Image
                className="object-cover object-center h-36 w-36"
                src={sign2}
                width={500}
                height={500}
                alt={"card"}
              />{" "}
              <Image
                className="object-cover object-center h-36 w-36"
                src={sign3}
                width={500}
                height={500}
                alt={"card"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
