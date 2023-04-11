"use client";
import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import DeleteModal from "./deleteModal";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

type getProps = {
  id: string;
  data: DocumentData;
};

interface functionProps {
  openModal(arg: React.MouseEvent, id: string): void;
  id: string;
  data: DocumentData;
}

const Listing: React.FC<functionProps> = (props) => {
  const doc = props.data;

  return (
    <div>
      <Link href={`./dashboard/createlisting?pid=${props.data.id}`}>
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_40px] gap-4 border-t border-backroundDark p-4">
          <h1>{doc.data.MLS}</h1>
          <h1>{doc.data.Address}</h1>
          <h1>CAD {parseInt(doc.data.Price).toLocaleString()}</h1>
          <h1>{doc.data.Type}</h1>
          <div
            className="w-full grid place-content-center transition-all duration-200 hover:text-red-500"
            onClick={(e) => props.openModal(e, props.data.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function DashList({ ...props }) {
  const data = props.data;
  const [showModal, setShowModal] = useState(false);
  const [listingId, setListingId] = useState("");
  const router = useRouter();

  const deleteSuccess = () =>
    toast.success("Listing Deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  async function deletePost() {
    const data = await fetch(`/api/deletePost`, {
      method: "POST",
      body: JSON.stringify({ listingId }),
    });
    const res = await data.json();
    if (!res.ok) console.log("error");
    deleteSuccess();
  }

  function toggleModal(e: React.MouseEvent, id: string) {
    e.stopPropagation();
    e.nativeEvent.preventDefault();
    setShowModal(!showModal);
    setListingId(id);
  }

  function handleModal() {
    setShowModal(!showModal);
    deletePost();
    deleteSuccess();
    console.log(" Listing Deleted");

    router.refresh();
  }
  const items = data.map((doc: getProps) => (
    <Listing key={doc.id} data={doc} id={doc.id} openModal={toggleModal} />
  ));

  return (
    <div>
      <ToastContainer />
      <DeleteModal
        show={showModal}
        id={listingId}
        handleModal={handleModal}
        closeModal={toggleModal}
      />
      <div className="mt-4 rounded-xl overflow-hidden drop-shadow-sm shadow-sm">
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_40px] gap-4 bg-foreground text-background p-3 text-[0.55rem] uppercase">
          <h1>MLS#</h1>
          <h1>Listing</h1>
          <h1>Price</h1>
          <h1>Type</h1>
          <h1>Options</h1>
        </div>
        <div className="grid grid-cols-1 text-xs bg-background">{items}</div>
      </div>
    </div>
  );
}
