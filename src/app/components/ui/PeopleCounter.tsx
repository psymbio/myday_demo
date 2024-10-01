"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setCounter } from "@/slices/counterSlice";
import { RootState } from "@/app/store";

const PeopleCounter: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const [waiting, setWaiting] = useState(false); // State for waiting

  // Load counter value from localStorage on page load
  useEffect(() => {
    const savedCounter = localStorage.getItem("peopleCounter");
    if (savedCounter) {
      const parsedCounter = parseInt(savedCounter, 10);
      dispatch(setCounter(parsedCounter));
      dispatch(increment()); // Increment after setting the saved value
    } else {
      dispatch(increment()); // First page load should start from 50 and increment
    }
  }, [dispatch]);

  // Save counter value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("peopleCounter", counter.toString());
  }, [counter]);

  // Randomly increment or decrement the counter at intervals
  useEffect(() => {
    const randomInterval = () => Math.floor(Math.random() * 5000) + 1000; // Random interval between 1s and 6s

    const intervalId = setInterval(() => {
      if (!waiting) {
        const randomAction = Math.random() < 0.5 ? decrement : increment; // Randomly choose between increment and decrement
        dispatch(randomAction());
      }
    }, randomInterval());

    // Clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch, waiting]);

  // Trigger waiting when the counter reaches 250
  useEffect(() => {
    if (counter === 250) {
      setWaiting(true); // Set waiting to true
      const timer = setTimeout(() => {
        setWaiting(false); // Reset waiting after 5 seconds
      }, 5000); // Wait for 5 seconds

      return () => clearTimeout(timer); // Clear timeout on unmount
    }
  }, [counter]);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-semibold">Visitors:</span>
      <span className="text-lg font-bold">{counter}</span>
    </div>
  );
};

export default PeopleCounter;
