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
        console.log(message);
        setMessages(message);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Welcome to: {room.toUpperCase()}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">{message.data.user}:</span>{" "}
            {message.data.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
