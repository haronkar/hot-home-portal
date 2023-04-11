import {
  faExclamationCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeleteModal(props: {
  show: boolean;
  id: string;
  handleModal(): void;
  closeModal(arg: React.MouseEvent, id: string): void;
}) {
  return (
    <>
      {props.show && (
        <div className="absolute top-0 left-0 grid place-content-center bg-foreground/40 w-screen h-screen z-50 p-4 overflow-x-hidden overflow-y-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              onClick={(e) => props.closeModal(e, "")}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="p-6 text-center">
              <FontAwesomeIcon icon={faExclamationCircle} size="4x" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 select-none">
                Are you sure you want to delete this listing?
              </h3>
              <button
                onClick={() => props.handleModal()}
                type="button"
                className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                Yes, I'm sure
              </button>
              <button
                onClick={(e) => props.closeModal(e, "")}
                type="button"
                className="focus:outline-none rounded-lg border0 text-sm font-medium px-5 py-2.5 focus:z-10 bg-foreground text-backroundDark hover:text-white hover:bg-gray-600">
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
