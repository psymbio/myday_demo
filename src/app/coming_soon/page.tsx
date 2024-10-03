"use client";

// File: @/app/components/ui/ComingSoon.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ComingSoonProps {
  /**
   * The message to display on the Coming Soon page.
   * @default "This feature is coming soon!"
   */
  message?: string;

  /**
   * The path to redirect the user to after the delay.
   * @default "/"
   */
  redirectPath?: string;

  /**
   * The delay before automatic redirection (in milliseconds).
   * @default 5000 (5 seconds)
   */
  redirectDelay?: number;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  message = "This feature is coming soon!",
  redirectPath = "/",
  redirectDelay = 5000,
}) => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(Math.floor(redirectDelay / 1000));

  useEffect(() => {
    // Timer for automatic redirection
    const timer = setTimeout(() => {
      router.push(redirectPath);
    }, redirectDelay);

    // Countdown interval
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [redirectDelay, redirectPath, router]);

  const handleRedirect = () => {
    router.push(redirectPath);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-8 max-w-md w-full">
        {/* HSBC Logo */}
        <div className="mb-6">
          <Image
            src="/hsbc-logo.png"
            alt="HSBC Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-hsbc-red mb-4 text-center">
          🚧 {message} 🚧
        </h1>
        <p className="text-hsbc-grey mb-2 text-center">
          We're working hard to bring this feature to you.
        </p>
        <p className="text-hsbc-grey mb-6 text-center">
          Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}.
        </p>
        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-hsbc-red text-white rounded-md hover:bg-hsbc-red-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-hsbc-red focus:ring-opacity-50"
          aria-label="Redirect to the previous page"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
