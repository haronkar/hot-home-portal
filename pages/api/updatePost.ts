import { db } from "@/firebase/clientApp";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post = JSON.parse(req.body);
    if (req.method == "POST") {
      try {
        const docRef = doc(db, "message", post.docId);

        await updateDoc(docRef, {
          Price: post.price,
          Listing: post.location,
          MLS: post.mls,
          Type: post.type,
        });

        return res.status(200);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
