import { db, storage } from "@/firebase/clientApp";
import { getDocs, collection, DocumentData } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getDocs(collection(db, "message"));
    let result: { id: string; imageUrl: string; data: DocumentData }[] = [];
    data.forEach(async (doc) => {
      try {
        const storageRef = ref(storage, "C6002259/1.jpg");
        const imageUrl = await getDownloadURL(storageRef);
        console.log(imageUrl);
        result.push({ id: doc.id, imageUrl: imageUrl, data: doc.data() });
      } catch (error) {
        return res.status(500).json(error);
      }
    });
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}
