interface LoadingProps {
  color?: string;
  size?: number;
}

const Loading: React.FC<LoadingProps> = ({
  color = "foreground",
  size = 1.5,
}) => {
  const bgColor = `bg-${color}`;

  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <span className="inline-flex items-center gap-px">
          <span
            className={`animate-blink mx-px h-2 w-2 rounded-full ${bgColor}`}></span>
          <span
            className={`animate-blink animation-delay-200 mx-px h-2 w-2 rounded-full ${bgColor}`}></span>
          <span
            className={`animate-blink animation-delay-[400ms] mx-px h-2 w-2 rounded-full ${bgColor}`}></span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
