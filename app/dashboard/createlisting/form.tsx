"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DocumentData } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/app/(components)/(form)/input";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/clientApp";
import ImageUploader from "@/app/(components)/(form)/imageUploader";

export default function FormPost(props: { id?: string; data: DocumentData }) {
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [mls, setMls] = useState("");
  const [type, setType] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [cooling, setCooling] = useState("");
  const [flooring, setFlooring] = useState("");
  const [appliances, setAppliances] = useState("");
  const [heating, setHeating] = useState("");
  const [parking, setParking] = useState("");
  const [basement, setBasement] = useState("");
  const [lot, setLot] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  // const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const router = useRouter();
  const docId = props.id;
  const docData = props.data;

  const addSuccess = () =>
    toast.success("New Listing Added!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  const updateSuccess = () =>
    toast.success("Listing Updates!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  useEffect(() => {
    if (docId) {
      setPrice(docData.Price);
      setAddress(docData.Address);
      setCity(docData.City);
      setPostal(docData.Postal);
      setMls(docData.MLS);
      setType(docData.Type);
      setBed(docData.Bed);
      setBath(docData.Bath);
      setCooling(docData.Cooling);
      setFlooring(docData.Flooring);
      setAppliances(docData.Appliances);
      setHeating(docData.Heating);
      setParking(docData.Parking);
      setBasement(docData.Basement);
      setLot(docData.Lot);
      setYearBuilt(docData.Year_Built);
      setDescription(docData.Description);
    }
  }, []);

  const hangleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      setFiles(fileList);
      const selectedImages = Array.from(fileList).map((file) =>
        URL.createObjectURL(file)
      );
      setImages([...selectedImages]);
    } else {
      setFiles(null);
    }
  };

  function handleForm(e: React.FormEvent) {
    e.preventDefault();

    if (docId) {
      modifyPost();
      updateSuccess();
      console.log("One");
    } else {
      submitNewPost();
      addSuccess();
    }

    if (!files) {
      console.log("No File");
      return;
    }

    for (let i = 0; i < images.length; i++) {
      const file = files[i];
      const storageRef = ref(storage, `${mls}/${file.name}`);
      uploadBytes(storageRef, file).then(() => {
        console.log("uploaded");
      });
    }

    setFiles(null);
    setImages([]);
  }

  const createProps = {
    docId,
    price,
    address,
    mls,
    type,
    city,
    postal,
    bed,
    bath,
    cooling,
    flooring,
    appliances,
    heating,
    parking,
    basement,
    lot,
    yearBuilt,
    description,
  };

  function ResetFields() {
    setPrice("");
    setAddress("");
    setCity("");
    setPostal("");
    setMls("");
    setType("");
    setBed("");
    setBath("");
    setCooling("");
    setFlooring("");
    setAppliances("");
    setHeating("");
    setParking("");
    setBasement("");
    setLot("");
    setYearBuilt("");
    setDescription("");
  }

  async function modifyPost() {
    const data = await fetch(`/api/updatePost`, {
      method: "POST",
      body: JSON.stringify(createProps),
    });
    const res = await data.json();
    if (!res.ok) console.log("error");
  }

  async function submitNewPost() {
    router.refresh();

    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify(createProps),
    });

    const res = await data.json();
    ResetFields();

    if (!res.ok) {
      console.log(res);
    }
  }

  return (
    <div>
      <form className="flex gap-4" onSubmit={handleForm}>
        <div className="">
          <div className="relative grid grid-cols-2 gap-2 col-span-3 max-w-sm md:max-w-lg bg-background p-4 pt-12 rounded-xl drop-shadow-md mb-5">
            <h1 className="absolute top-3 left-4 uppercase font-semibold text-xs border-b border-foreground/20 pb-1">
              Details
            </h1>
            <div className="input-box col-span-2">
              <Input value={address} name="Address" setValue={setAddress} />
            </div>
            <div className="input-box">
              <Input value={city} name="City" setValue={setCity} />
            </div>
            <div className="input-box">
              <Input value={postal} name="Postal" setValue={setPostal} />
            </div>
            <div className="input-box col-span-2">
              <Input
                value={description}
                name="Description"
                setValue={setDescription}
              />
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-2 col-span-3 max-w-sm md:max-w-lg bg-background p-4 pt-12 rounded-xl drop-shadow-md mb-5">
            <h1 className="absolute top-3 left-4 uppercase font-semibold text-xs border-b border-foreground/20 pb-1">
              Price
            </h1>
            <div className="input-box col-span-2">
              <Input value={price} name="Price" setValue={setPrice} />
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-2 col-span-3 max-w-sm md:max-w-lg bg-background p-4 pt-12 rounded-xl drop-shadow-md mb-5">
            <h1 className="absolute top-3 left-4 uppercase font-semibold text-xs border-b border-foreground/20 pb-1">
              Images
            </h1>
            <div className="col-span-2">
              <ImageUploader
                images={images}
                hangleFileChange={hangleFileChange}
              />
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-2 col-span-3 max-w-sm md:max-w-lg bg-background p-4 pt-12 rounded-xl drop-shadow-md mb-5">
            <h1 className="absolute top-3 left-4 uppercase font-semibold text-xs border-b border-foreground/20 pb-1">
              Fact and Features
            </h1>
            <div className="input-box">
              <Input value={type} name="Type" setValue={setType} />
            </div>
            <div className="input-box">
              <Input value={mls} name="MLS#" setValue={setMls} />
            </div>
            <div className="input-box">
              <Input value={bed} name="Beds" setValue={setBed} />
            </div>
            <div className="input-box">
              <Input value={bath} name="Baths" setValue={setBath} />
            </div>
            <div className="input-box">
              <Input value={flooring} name="Flooring" setValue={setFlooring} />
            </div>
            <div className="input-box">
              <Input
                value={yearBuilt}
                name="Year Built"
                setValue={setYearBuilt}
              />
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-2 col-span-3 max-w-sm md:max-w-lg bg-background p-4 pt-12 rounded-xl drop-shadow-md mb-5">
            <h1 className="absolute top-3 left-4 uppercase font-semibold text-xs border-b border-foreground/20 pb-1">
              Extra Fields
            </h1>
            <div className="input-box">
              <Input value={cooling} name="Cooling" setValue={setCooling} />
            </div>
            <div className="input-box">
              <Input value={heating} name="Heating" setValue={setHeating} />
            </div>
            <div className="input-box">
              <Input
                value={appliances}
                name="Appliances"
                setValue={setAppliances}
              />
            </div>
            <div className="input-box">
              <Input value={lot} name="Lot Size" setValue={setLot} />
            </div>
            <div className="input-box">
              <Input value={parking} name="Parking" setValue={setParking} />
            </div>
            <div className="input-box">
              <Input value={basement} name="Basement" setValue={setBasement} />
            </div>
          </div>
        </div>

        <div className="bg-background rounded-xl drop-shadow-md h-fit p-4">
          <input
            className="bg-accentColor text-foreground p-3 text-sm rounded-xl cursor-pointer"
            type="submit"
            value="Save changes"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
