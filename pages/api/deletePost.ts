import { db } from "@/firebase/clientApp";
import { doc, deleteDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post = JSON.parse(req.body);

    const data = await deleteDoc(doc(db, "message", post.listingId));

    return res.status(200);
  } catch (error) {
    return res.status(500).json(error);
  }
}
