type varientProps = "textarea";

interface Props {
  value: string;
  name: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  require?: boolean;
  varient?: varientProps;
}

export default function Input({
  value,
  name,
  setValue,
  require = true,
  varient,
}: Props) {
  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={require}
        />
        <label>{name}</label>
      </div>
    </>
  );
}
