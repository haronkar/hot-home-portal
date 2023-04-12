"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DashList from "./dashlist";

export default function dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/getPostAll`);
        const dataRaw = await res.json();

        setData(dataRaw);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="pl-32 py-6 md:pl-52 text-2xl bg-background">
        Dashboard : Admin
      </h1>
      <div className="pl-32 pr-8 md:pl-52 py-4">
        <div className="mt-3 flex justify-between">
          <h1 className="text-lg">Listings</h1>
          <Link
            className="bg-accentColor text-foreground px-3 py-2 rounded-xl text-sm"
            href={"./dashboard/createlisting?pid="}>
            Add Listing
          </Link>
        </div>
        <DashList data={data} />
      </div>
    </div>
  );
}
