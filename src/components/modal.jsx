import React, { useRef } from 'react';

const Modal = ({ isOpen, onClose, title, description, imageUrl }) => {
  const dialogRef = useRef(null);

  // Ensure dialog closes when `isOpen` changes to false
  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black backdrop:bg-opacity-50 backdrop-blur-sm rounded-3xl w-11/12 md:w-1/3 p-5 bg-background border-2 border-accent"
      onClose={onClose}
    >
      <div className="flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="self-end text-3xl text-accent hover:text-gray-800 focus:outline-none"
        >
          &times;
        </button>

        {/* Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Modal"
            className="rounded-lg w-full h-[300px] object-cover object-center mb-4 mt-4"
          />
        )}

        {/* Title */}
        <h2 className="text-xl font-extrabold text-accent mb-2 font-IranYekan">{title}</h2>

        {/* Description */}
        <p className="text-accent mb-4 font-IranYekan font-normal text-justify direction-rtl p-6 text-sm">{description}</p>
      </div>
    </dialog>
  );
};

export default Modal;
