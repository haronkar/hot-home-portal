import { db } from "@/firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req?: NextApiRequest,
  res?: NextApiResponse
) {
  try {
    const post = JSON.parse(req?.body);
    if (req?.method == "POST") {
      try {
        const docRef = collection(db, "message");

        const params = {
          Price: post.price,
          Address: post.address,
          MLS: post.mls,
          Type: post.type,
          City: post.city,
          Postal: post.postal,
          Bed: post.bed,
          Bath: post.bath,
          Cooling: post.cooling,
          Flooring: post.flooring,
          Appliances: post.appliances,
          Heating: post.heating,
          Parking: post.parking,
          Basement: post.basement,
          Lot: post.lot,
          Year_Built: post.yearBuilt,
          Description: post.description,
        };

        const data = await addDoc(docRef, params);
        // return res.status(200);
        return res?.status(200).json(data);
      } catch (error) {
        return res?.status(500).json(error);
      }
    }
  } catch (error) {
    res?.status(500).json(error);
  }
}
