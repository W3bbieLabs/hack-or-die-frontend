import Head from "next/head";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
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
    <div className=" h-full">
      <ToastContainer
        position={toast.POSITION.TOP_LEFT}
        className="toast-container bg-gray rounded-full"
        closeButton={false}
        hideProgressBar
      />
      <Head>
        <title>Hack or Die</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
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
        <div className="absolute inset-0 h-full w-full bg-white" />
      )}
      <div className="relative -mt-24 flex h-full items-center">
        <ul className="mx-auto font-publicsans font-medium">
          <li className="flex items-center justify-between border border-b-0 border-black p-3">
            <span className="">DEMO</span>
            <Link href={"/demo"}>
              <img className="ml-16 h-6 w-6" src="/arrow_button.svg"></img>
            </Link>
          </li>
          <li className="flex items-center justify-between border border-b-0 border-black p-3">
            <span className="">MARKETPLACE</span>
            <Link href={"/demo"}>
              <img className="ml-16 h-6 w-6" src="/arrow_button.svg"></img>
            </Link>
          </li>
          <li className="flex items-center justify-between border border-black p-3">
            <span className="">YOUR ITEMS</span>
            <Link href={"/demo"}>
              <img className="ml-16 h-6 w-6" src="/arrow_button.svg"></img>
            </Link>
          </li>
        </ul>
        <div className="fixed bottom-0 mb-8 flex w-full justify-center p-4 font-publicsans font-medium">
          <button
            onClick={toggleSound}
            className="btn btn-primary mr-2 w-48 rounded-2xl border-2 border-black pt-3 pb-3"
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
          <button className="btn btn-primary w-48 rounded-2xl border-2 border-black pt-2 pb-2">
            RANDOM BG
          </button>
        </div>
        <div className="fixed bottom-0 left-4 mb-6 flex flex-col p-4 font-publicsans">
          <span className="mb-2 font-bold">@W3BBIE_XYZ</span>
          <span>Hack or Die</span>
          <span>Marketplace,</span>
          <div className="flex">
            <span>Courtesy o</span>
            <span className="underline">f</span>
          </div>
          <span className="underline">W3BBIE.</span>
        </div>
      </div>
    </div>
  );
}
