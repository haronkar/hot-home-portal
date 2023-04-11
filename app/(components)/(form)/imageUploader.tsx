interface Props {
  images: string[];
  hangleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader: React.FC<Props> = ({ images, hangleFileChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 w-full">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
          Upload Images
          <input
            className="absolute top-0 left-0 cursor-pointer opacity-0"
            id="image"
            type="file"
            multiple
            onChange={hangleFileChange}
          />
        </label>
      </div>
      <div className="flex flex-wrap flex-1">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              className="h-32 w-32 object-cover rounded m-2"
              src={image}
              alt={`Preview ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
