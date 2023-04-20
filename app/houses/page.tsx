"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import BedBath from "../(components)/(filters)/bed-bath";
import Dropdown from "../(components)/(filters)/dropdown";
import HomeType from "../(components)/(filters)/home-type";
import PriceRange from "../(components)/(filters)/price-range";
import Footer from "../(components)/footer";
import GridComponent from "../(components)/grid-component";

import { storage } from "@/firebase/clientApp";
import { getDownloadURL, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
import Loading from "../(components)/Loading";

type Gallery = {
  id: string;
  imageUrl: string;
  data: DocumentData;
};

type HomeTypeProps = "Townhouse" | "Villa" | "Condominium";

export default function Houses({
  searchParams,
}: {
  searchParams?: { city?: string };
}) {
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState<HomeTypeProps[]>([]);
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  const cityFilter = searchParams?.city; // or an empty string if no filter
  const bed = ""; // or an empty string if no filter
  const bath = "";

  const router = useRouter();

  const capitalize = (s: string) =>
    s && s[0].toUpperCase() + s.slice(1).toLowerCase() + ", ON";

  const filteredGallery = gallery.filter((item) => {
    return (
      (!cityFilter || item.data.City === capitalize(cityFilter)) &&
      (!selectedTypes.length || selectedTypes.includes(item.data.Type)) &&
      (!bed || item.data.Bed === bed) &&
      (!bath || item.data.Bath === bath) &&
      (minPrice === 0 || item.data.Price >= minPrice) &&
      (maxPrice === 0 || item.data.Price <= maxPrice)
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/getPostAll`);
        const data = await res.json();

        const gallertData: Gallery[] = [];
        for (const doc of data) {
          const storageRef = ref(storage, `${doc.data.MLS}/1.jpg`);
          const imageUrl = await getDownloadURL(storageRef);

          gallertData.push({
            id: doc.id,
            data: doc.data,
            imageUrl: imageUrl,
          });
          setGallery(gallertData);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function onMinPriceChange(value: number) {
    setMinPrice(value);
  }
  function onMaxPriceChange(value: number) {
    setMaxPrice(value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({ city: city });
    const url = `/houses?${params.toString()}`;
    router.push(url);
  };
  // console.log(filteredGallery);

  return (
    <div className="w-screen h-screen bg-backroundDark flex flex-col overflow-hidden">
      <div className="pt-12 pb-4 px-10 bg-background shadow-sm flex-initial sticky top-0 z-10">
        <h1 className="mb-4 text-lg font-bold">
          {filteredGallery.length} Results
        </h1>
        <div className="flex gap-6 items-center">
          <div className="relative border w-fit border-foreground/20 rounded-2xl px-3">
            <form onSubmit={handleSubmit}>
              <input
                name="city"
                className="text-sm p-2 outline-none w-56 bg-transparent"
                type="text"
                placeholder="Enter an Address, City, MLS#"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                type="submit"
                className="border-l-2 pl-2 border-foreground/30">
                <FontAwesomeIcon icon={faSearch} size={"xs"} />
              </button>
            </form>
          </div>
          {/*  */}
          <div className="flex gap-4">
            <Dropdown label="Price">
              <PriceRange
                minPriceChange={onMinPriceChange}
                maxPriceChange={onMaxPriceChange}
                minValue={minPrice}
                maxValue={maxPrice}
              />
            </Dropdown>
            <Dropdown label="Bed/Bath">
              <BedBath />
            </Dropdown>
            <Dropdown label="Home Type" activeBg={selectedTypes.length > 0}>
              <HomeType
                selectedTypes={selectedTypes}
                setSelectedType={setSelectedTypes}
              />
            </Dropdown>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="w-full overflow-y-auto overflow-x-hidden">
        {loading ? <Loading /> : <GridComponent items={filteredGallery} />}
        <Footer />
      </div>
    </div>
  );
}
