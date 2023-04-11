"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

type DropdownProps = {
  label: string;
  children: React.ReactNode;
  activeBg?: boolean;
};

export default function Dropdown({
  label,
  children,
  activeBg = false,
}: DropdownProps) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const bgColor = activeBg ? "bg-accentColor" : "bg-background";

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-sm" ref={dropdownRef}>
      <button
        className={`border ${bgColor} py-2 px-3 rounded-2xl`}
        type="button"
        onClick={() => setActive(!active)}>
        {label}
        <FontAwesomeIcon className="ml-2" icon={faChevronDown} size={"xs"} />
      </button>
      {active && (
        <div className="absolute bg-background border border-foreground/20 p-4 rounded-2xl mt-3 w-fit">
          {children}
        </div>
      )}
    </div>
  );
}
