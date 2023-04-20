"use client";
import { useState } from "react";
import { Auth } from "./auth";
import { Chat } from "./chat";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
const cookie = new Cookies();

export default function ChatBubble() {
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox(!showBox);
  };

  return (
    <div className="absolute right-16 bottom-10">
      <button
        className="bg-accentColor text-foreground font-bold p-5 rounded-full absolute bottom-0 right-0"
        onClick={handleClick}>
        <FontAwesomeIcon icon={faComment} size={"xl"} />
      </button>
      {showBox && (
        <div className="absolute  right-0 bottom-20 w-96 max-h-96 overflow-scroll h-fit bg-white border border-foreground rounded-lg p-4 shadow-lg">
          {!isAuth ? <Auth setIsAuth={setIsAuth} /> : <Chat room="room1" />}
        </div>
      )}
    </div>
  );
}
