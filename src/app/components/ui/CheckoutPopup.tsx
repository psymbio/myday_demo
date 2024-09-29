// components/CheckoutPopup.tsx
import React from "react";

interface CheckoutPopupProps {
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const CheckoutPopup: React.FC<CheckoutPopupProps> = ({ itemName, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg sm:p-6 lg:p-8 max-w-md w-full">
        <h2 className="font-medium text-lg mb-4">Remove Item</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to remove {itemName} from your cart?</p>
        <div className="flex justify-end gap-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={onConfirm}>
            Yes, Remove
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPopup;
