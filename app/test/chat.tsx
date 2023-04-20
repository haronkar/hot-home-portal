"use client";
import { useState, useEffect } from "react";
import { auth, db, queryMessages } from "@/firebase/clientApp";
import { cleanup } from "@/pages/api/getChat";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

type PageProps = { id: string; data: DocumentData };

export const Chat = ({ room }: { room: string }) => {
  const [messages, setMessages] = useState<PageProps[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/getChat`, { cache: "no-store" });
        const message = await data.json();
        // console.log(message);
        setMessages(message);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (newMessage === "") return;

    const data = await fetch(`/api/createChat`, {
      method: "POST",
      body: JSON.stringify({
        text: newMessage,
        user: auth.currentUser?.displayName,
        room,
      }),
    });
    setNewMessage("");
  };

  return (
    <div className="">
      <div className="">
        {messages.map((message) => (
          <div key={message.id} className="">
            <span className="font-bold text-sm text-foreground/60 mr-1">
              {message.data.user}:
            </span>
            {message.data.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className=" pt-5">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="outline-none"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
