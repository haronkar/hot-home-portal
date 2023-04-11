import { storage } from "@/firebase/clientApp";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post = JSON.parse(req.body);

    const storageRef = ref(storage, post.id);
    const imageRefs = await listAll(storageRef);

    const imagePromises = imageRefs.items.map((imageRef) =>
      getDownloadURL(imageRef)
    );

    const urls = await Promise.all(imagePromises);

    const images = urls.map((url, i) => ({
      id: imageRefs.items[i].name,
      url,
    }));

    // setImages(images);

    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json(error);
  }
}
