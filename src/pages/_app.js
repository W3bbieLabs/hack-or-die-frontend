import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const activeChainId = ChainId.Mumbai;

export default function App({ Component, pageProps }) {
  const isFirstRender = useRef(true);
  const [showVideo, setShowVideo] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      toast(
        <div className="flex">
          <span className="text-[0.8rem]">
            This is the marketplace. This notification will disappear
            momentarily.
          </span>
          <img src="/logo_alt.svg" alt="logo-alt" className="ml-2 w-8" />
        </div>,
        {
          position: toast.POSITION.TOP_LEFT,
        }
      );
    }
  }, []);

  const toggleSound = () => {
    if (isSoundEnabled) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsSoundEnabled(!isSoundEnabled);
  };
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <div className="h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300">
        <ToastContainer
          position={toast.POSITION.TOP_LEFT}
          className="toast-container bg-gray rounded-full"
          closeButton={false}
          hideProgressBar
        />
        <div className="relative z-10">
          <Navbar />
        </div>
        {showVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
          >
            <source src="/intro1.mp4" type="video/mp4" />
          </video>
        )}

        {!showVideo && (
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300" />
        )}
        <Component {...pageProps} />
        <div className="fixed bottom-0 mb-8 ml-4 flex w-full flex-col items-center justify-center p-4 font-publicsans font-medium text-black lg:fixed lg:ml-0 lg:flex-row">
          <button
            onClick={toggleSound}
            className="btn btn-primary mr-2 mb-4 w-48 rounded-2xl border-2 border-black pt-3 pb-3 lg:mt-0 lg:mb-0"
          >
            TOGGLE SOUND
          </button>
          <audio ref={soundRef} loop>
            <source src="/start_audio.mp3" type="audio/mpeg" />
          </audio>
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="btn btn-primary mr-2 w-48 rounded-2xl  border-2 border-black pt-3 pb-3"
          >
            TOGGLE ANIMATION
          </button>
        </div>
        <div className="fixed bottom-0 left-4 mb-6 mt-8 flex flex-col p-4 font-publicsans text-black lg:mt-0">
          <span className="mb-2 font-bold">@W3BBIE_XYZ</span>
          <span>Hack or Die</span>
          <span>Marketplace,</span>
          <div className="flex">
            <span>Courtesy o</span>
            <span className="underline">f</span>
          </div>
          <span className="underline">
            <Link
              href={
                "https://violet-crown-74e.notion.site/W3BBIE-7a258cbe79014568b29ee4815e49af41/"
              }
              target="_blank"
            >
              W3BBIE.
            </Link>
          </span>
        </div>
      </div>
    </ThirdwebProvider>
  );
}
