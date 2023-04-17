"use client";

import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import FormPost from "./form";

type PageProps = {
  searchParams: {
    pid?: string;
  };
};

export default function CreateListing({ searchParams }: PageProps) {
  const [data, setData] = useState<DocumentData>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/getPostOne`, {
          method: "POST",
          body: JSON.stringify({ id: searchParams.pid }),
        });
        const dataRaw = await res.json();

        setData(dataRaw);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [searchParams.pid]);

  return (
    <div>
      <h1 className="pl-32 py-6 md:pl-52 text-2xl bg-background">
        Create Listing
      </h1>
      <section className="ml-32 md:ml-52 py-4">
        <Link href={"./dashboard"}>
          <FontAwesomeIcon icon={faCaretLeft} /> Dashboard
        </Link>
        <div className="pt-10 flex justify-start md:justify-center w-full">
          <FormPost id={searchParams.pid} data={data} />
        </div>
      </section>
    </div>
  );
}
