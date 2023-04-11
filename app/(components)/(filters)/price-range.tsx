"use client";
import React, { useState } from "react";

type PriceProps = {
  minPriceChange: (value: number) => void;
  maxPriceChange: (value: number) => void;
  minValue: number;
  maxValue: number;
};

const PriceRange: React.FC<PriceProps> = ({
  minPriceChange,
  maxPriceChange,
  minValue,
  maxValue,
}) => {
  const [minLocal, setMinLocal] = useState(minValue);
  const [maxLocal, setMaxLocal] = useState(maxValue);

  function handleFrom(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    minPriceChange(minLocal);
    maxPriceChange(maxLocal);
  }

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^\d*$/.test(inputValue)) {
      const value = parseInt(event.target.value);
      if (isNaN(value)) {
        setMinLocal(0);
        return;
      }
      setMinLocal(value);
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      const value = parseInt(event.target.value);
      if (isNaN(value)) {
        setMaxLocal(0);
        return;
      }

      setMaxLocal(value);
    }
  };

  return (
    <div className="">
      <h1 className=" p-2 border-b border-foreground/20 font-bold">
        Price Range
      </h1>
      <form onSubmit={handleFrom} className="flex gap-5 mt-4 justify-center">
        <div>
          <label className="pl-2" htmlFor="min-input">
            Minimum
          </label>
          <input
            className="bg-backroundDark p-3 border border-foreground/20 rounded-2xl w-32 appearance-none"
            type="text"
            id="min-input"
            value={minLocal}
            onChange={handleMinInputChange}
          />
        </div>
        <div className="">
          <label className="pl-2" htmlFor="max-input">
            Maximum
          </label>
          <input
            className="bg-backroundDark p-3 border border-foreground/20 rounded-2xl w-32 appearance-none"
            type="text"
            id="max-input"
            value={maxLocal}
            onChange={handleMaxInputChange}
          />
        </div>
        <input className="pt-5 cursor-pointer" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PriceRange;
