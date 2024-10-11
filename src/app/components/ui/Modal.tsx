import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg p-8 relative w-10/12 max-w-md z-60">
        {children}
      </div>
    </div>
  );
};

export default Modal;
