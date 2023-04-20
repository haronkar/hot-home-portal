import { db } from "@/firebase/clientApp";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req?: NextApiRequest,
  res?: NextApiResponse
) {
  try {
    const post = JSON.parse(req?.body);
    if (req?.method == "POST") {
      try {
        const docRef = collection(db, "chat");

        const params = {
          text: post.text,
          createdAt: serverTimestamp(),
          user: post.user,
          room: post.room,
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
