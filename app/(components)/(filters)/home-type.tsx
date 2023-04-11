type HomeTypeProps = "Townhouse" | "Villa" | "Condominium";

type props = {
  selectedTypes: HomeTypeProps[];
  setSelectedType: (type: HomeTypeProps[]) => void;
};

const HomeType: React.FC<props> = ({ setSelectedType, selectedTypes }) => {
  const handleCheckboxChange = (type: HomeTypeProps) => {
    if (selectedTypes.includes(type)) {
      setSelectedType(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedType([...selectedTypes, type]);
    }
  };

  return (
    <div>
      <h1 className=" p-2 border-b border-foreground/20 font-bold">
        Home Type
      </h1>
      <div className="mt-4">
        <label className="inline-flex items-center mr-4 mb-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={selectedTypes.includes("Townhouse")}
            onChange={() => handleCheckboxChange("Townhouse")}
          />
          <span className="ml-2 select-none">Townhouse</span>
        </label>
        <label className="inline-flex items-center mr-4 mb-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={selectedTypes.includes("Villa")}
            onChange={() => handleCheckboxChange("Villa")}
          />
          <span className="ml-2 select-none">Villa</span>
        </label>
        <label className="inline-flex items-center mb-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={selectedTypes.includes("Condominium")}
            onChange={() => handleCheckboxChange("Condominium")}
          />
          <span className="ml-2 select-none">Condominium</span>
        </label>
      </div>
      {/* <div className="mt-4">
        <p>
          Selected types:
          {selectedTypes.join(", ")}
        </p>
      </div> */}
    </div>
  );
};

export default HomeType;
