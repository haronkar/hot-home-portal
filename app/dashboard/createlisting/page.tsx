import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FormPost from "./form";

export default async function CreateListing({
  searchParams,
}: {
  searchParams: { pid: string };
}) {
  async function getPost() {
    const res = await fetch(`${process.env.BASE_URL}/api/getPostOne`, {
      method: "POST",
      body: JSON.stringify({ id: searchParams.pid }),
    });
    if (!res.ok) {
      console.log("not ok");
    }
    return res.json();
  }
  let data = {};
  if (searchParams.pid) {
    data = await getPost();
  }

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
          <FormPost pid={searchParams.pid} data={data} />
        </div>
      </section>
    </div>
  );
}
