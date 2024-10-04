// pages/index.tsx
"use client";
import { useState } from "react";
import Modal from "./HomeToDeskpopup";
import { useDispatch } from "react-redux";
import { hideReservation } from "@/slices/hideshowmeetingSlice";
//import { hideMeeting } from "@/slices/hideshowmeetingSlice";


const HomeToDeskDisplay: React.FC = () => {
  const [showDelayModal, setShowDelayModal] = useState<boolean>(false);
  const [showCancelPassModal, setShowCancelPassModal] =
    useState<boolean>(false);
  const [showaddzoomlinkModal, setshowaddzoomlinkModal] =
    useState<boolean>(false);
  const [shownotifyModal, setshownotifyModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOpenDelayModal = () => {
    setShowDelayModal(true);
  };

  const handleYesToDelay = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(true);
  };

  const handleNoToDelay = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(true);
  };

  const handleYesToCancelPass = () => {
   
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(true);
   //call function to delete the data from screen
   console.log("Dispatching action - hideReservation ")
   dispatch(hideReservation(false));
  };

  const handleNoToCancelPass = () => {
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(true);
  };
  const handleshowaddzoomlinkModalConfirm = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(false);
    setshownotifyModal(true);
    //hide meetings from resetvation 
    console.log("Dispatching action - hideMeeting ")
    //dispatch(hideMeeting(false));
  };
  const handleshownotifyModalyes = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(false);
    setshownotifyModal(false);
   
  };
  const handleshownotifyModalno = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(false);
    setshownotifyModal(false);
  };
  const handleclose = () => {
    setShowDelayModal(false);
    setShowCancelPassModal(false);
    setshowaddzoomlinkModal(false);
    setshownotifyModal(false);
  };

  return (
    <div className="">
      <button
        onClick={handleOpenDelayModal}
        className="fixed bottom-4 left-4 z-50 bg-gray-500 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-2 rounded-full"
      >
       ↑
      </button>

      {/* First Modal: Delay on Elizabeth Line */}
      <Modal
        show={showDelayModal}
        title="TRAVEL ALERT"
        message="Line Closure on Elizabeth Line. Expected delays of 3 hours.  Would you like to update your day?"
        onYes={handleYesToDelay}
        onNo={handleNoToDelay}
        onClose={handleclose}
        flag="Travel"
      />

      {/* Second Modal: Cancel desk */}
      <Modal
        show={showCancelPassModal}
        title="Cancel Desk Booking?"
        message="LDN-PSP-Desk/L25/1.DCO0/01/D35"
        onYes={handleYesToCancelPass}
        onNo={handleNoToCancelPass}
        onClose={handleclose}
         flag="yes"
      />
      {/* Third Modal: Add Zoom Links */}
      <Modal
        show={showaddzoomlinkModal}
        title="Add zoom links to my room bookings?"
        message="LDN-PSP 25.Pod D"
        onYes={handleshowaddzoomlinkModalConfirm}
        onNo={handleNoToCancelPass}
        onClose={handleclose}
         flag="confirm"
      />

      {/* Fourth Modal: Add Zoom Links */}
      <Modal
        show={shownotifyModal}
        title="Notify other meeting attendees of my change to working location?"
        message=""
        onYes={handleshownotifyModalyes}
        onNo={handleshownotifyModalno}
        onClose={handleclose}
         flag="yes"
      />
    </div>
  );
};

export default HomeToDeskDisplay;
