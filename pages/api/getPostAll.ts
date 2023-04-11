import { db } from "@/firebase/clientApp";
import { getDocs, collection, DocumentData } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getDocs(collection(db, "message"));
    let result: { id: string; data: DocumentData }[] = [];
    data.forEach((doc) => {
      result.push({ id: doc.id, data: doc.data() });
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}
