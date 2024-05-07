import { useEffect } from "react";

interface Image {
  webformatURL: string;
}

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const closeModalOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-10"
      onClick={onClose}
    >
      <div className="max-w-3xl max-h-3/4 bg-white overflow-auto">
        <img src={image.webformatURL} alt="Modal" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ImageModal;
