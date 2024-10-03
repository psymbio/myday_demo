// pages/index.tsx
"use client";
import { useState } from "react";
import Modal from "./HomeToDeskpopup1";

const HomeToDeskDisplay: React.FC = () => {
  const [showDelayModal, setShowDelayModal] = useState<boolean>(false);
  const [showCancelPassModal, setShowCancelPassModal] =
    useState<boolean>(false);
  const [showaddzoomlinkModal, setshowaddzoomlinkModal] =
    useState<boolean>(false);
  const [shownotifyModal, setshownotifyModal] = useState<boolean>(false);

  const handleOpenDelayModal = () => {
    setShowDelayModal(true);
  };

  const handleYesToDelay = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(true);
  };

  const handleNoToDelay = () => {
    setShowDelayModal(false);
  };

  const handleYesToCancelPass = () => {
    console.log("Floor pass cancelled");
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(true);
  };

  const handleNoToCancelPass = () => {
    setShowCancelPassModal(false);
  };
  const handleshowaddzoomlinkModalConfirm = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(false);
    setshownotifyModal(true);
  };
  const handleshownotifyModalyes = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(false);
    setshownotifyModal(false);
    //call function to delete the data from screen
  };
  const handleshownotifyModalno = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(false);
    setshownotifyModal(false);
  };

  return (
    <div className="">
      <button
        onClick={handleOpenDelayModal}
        className="fixed bottom-4 left-4 z-50 bg-blue-500 text-white rounded-lg hover:bg-blue-200 transition"
      >
        Show
      </button>

      {/* First Modal: Delay on Elizabeth Line */}
      <Modal
        show={showDelayModal}
        title="Travel Updates "
        message="Line Closure on Elizabeth Line Expected delays of 3 hours. Would you like to update your day?"
        onYes={handleYesToDelay}
        onNo={handleNoToDelay}
      />

      {/* Second Modal: Cancel desk */}
      <Modal
        show={showCancelPassModal}
        title="Cancel Desk Booking?"
        message="LDN-PSP-Desk/L25/1.DCO0/01/D35"
        onYes={handleYesToCancelPass}
        onNo={handleNoToCancelPass}
      />
      {/* Third Modal: Add Zoom Links */}
      <Modal
        show={showaddzoomlinkModal}
        title="Add zoom links to my room bookings?"
        message="LDN-PSP 25.Pod D"
        onYes={handleshowaddzoomlinkModalConfirm}
        onNo={handleNoToCancelPass}
      />

      {/* Fourth Modal: Add Zoom Links */}
      <Modal
        show={shownotifyModal}
        title="Notify other meeting attendees of my change to working location?"
        message=""
        onYes={handleshownotifyModalyes}
        onNo={handleshownotifyModalno}
      />
    </div>
  );
};

export default HomeToDeskDisplay;
