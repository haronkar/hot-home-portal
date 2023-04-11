"use client";
import { useState } from "react";

type GalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
};

type Option = {
  label: string;
  value: GalleryItem;
};

const Search = ({ gallery }: { gallery: GalleryItem[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setOptions([]);
    } else {
      const filteredOptions = gallery.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      const newOptions = filteredOptions.map((item) => ({
        label: item.title,
        value: item,
      }));
      setOptions(newOptions);
    }
  };

  const handleSelect = (value: GalleryItem, option: Option) => {
    setSelectedOption(option);
    setSearchTerm(option.label);
    setOptions([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {options.length > 0 && (
        <ul>
          {options.map((option) => (
            <li
              key={option.value.imageUrl}
              onClick={() => handleSelect(option.value, option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {selectedOption && (
        <div className="border border-black">
          <h3>{selectedOption.value.title}</h3>
          <p>{selectedOption.value.description}</p>
          <img
            src={selectedOption.value.imageUrl}
            alt={selectedOption.value.title}
          />
        </div>
      )}
    </div>
  );
};

const gallery = [
  {
    title: "Mountain",
    description: "A beautiful mountain scene",
    imageUrl: "https://example.com/mountain.jpg",
  },
  {
    title: "Beach",
    description: "A peaceful beach scene",
    imageUrl: "https://example.com/beach.jpg",
  },
  {
    title: "City",
    description: "A busy city scene",
    imageUrl: "https://example.com/city.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="pt-24">
      <h1>Gallery Search</h1>
      <Search gallery={gallery} />
    </div>
  );
};

export default Gallery;
