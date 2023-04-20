import { db } from "@/firebase/clientApp";
import { error } from "console";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

let listener: any;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.setHeader("Cache-Control", "no-cache");
    // const post = JSON.parse(req.body);
    const messagesRef = collection(db, "chat");

    const queryMessages = query(
      messagesRef,
      where("room", "==", "room1"),
      orderBy("createdAt")
    );

    const unsub = onSnapshot(queryMessages, (snapshot) => {
      let messages: { id: string; data: DocumentData }[] = [];
      snapshot.forEach((doc) => {
        messages.push({ id: doc.id, data: doc.data() });
      });
      return res.send(messages);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
}

export function cleanup() {
  if (listener) {
    listener();
  }
}
