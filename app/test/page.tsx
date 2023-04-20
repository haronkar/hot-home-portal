"use client";
import { useState } from "react";
import { Auth } from "./auth";
import { Chat } from "./chat";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export default function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));

  if (!isAuth) {
    return (
      <div className="pt-24">
        <Auth setIsAuth={setIsAuth} />;
      </div>
    );
  }

  return (
    <div className="pt-24">
      <Chat room="room1" />
    </div>
  );
}
