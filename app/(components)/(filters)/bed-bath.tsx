import CheckBox from "./checkbox";

type props = {
  selectedBed: number;
  setSelectedBed: (type: number) => void;
};

export default function BedBath() {
  return (
    <div className="flex flex-col gap-4">
      {/* Bed */}
      <div className="">
        <h1 className="font-bold">Beds</h1>
        <div className="flex rounded-2xl overflow-hidden w-fit border border-foreground/20 mt-2">
          <CheckBox value="Any" />
          <CheckBox value="1" />
          <CheckBox value="2" />
          <CheckBox value="3" />
          <CheckBox value="4" />
          <CheckBox value="5" />
        </div>
      </div>
      {/* Baths */}
      <div className="">
        <h1 className="font-bold">Baths</h1>
        <div className="flex rounded-2xl overflow-hidden w-fit border border-foreground/20 mt-2">
          <CheckBox value="Any" />
          <CheckBox value="1" />
          <CheckBox value="2" />
          <CheckBox value="3" />
          <CheckBox value="4" />
          <CheckBox value="5" />
        </div>
      </div>
    </div>
  );
}
