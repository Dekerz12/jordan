import "react-color-palette/css";
import useModal from "../../context/useModal";
export default function ColorPickerModal({ children }) {
  const { isOpen, closeModal } = useModal();

  return isOpen ? (
    <div onClick={closeModal} className="absolute -top-[15rem] -left-20">
      <div
        className="max-w-[15rem] absolute"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}
