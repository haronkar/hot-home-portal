export default function CheckBox({ value }: { value: string }) {
  return (
    <label className="inline-flex items-center bg-background border-r border-foreground/20">
      <input type="checkbox" className="peer/bed appearance-none absolute" />
      <div className="peer-checked/bed:bg-accentColor select-none w-10 h-10 grid place-items-center">
        {value}
      </div>
    </label>
  );
}
