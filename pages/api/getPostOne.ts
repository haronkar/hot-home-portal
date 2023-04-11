import { db } from "@/firebase/clientApp";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post = JSON.parse(req.body);

    const docRef = doc(db, "message", post.id);
    const docSnap = await getDoc(docRef);

    return res.status(200).json(docSnap.data());
  } catch (error) {
    return res.status(500).json(error);
  }
}
