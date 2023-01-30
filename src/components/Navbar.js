import Link from "next/link";
import { useState } from "react";
import {
  useNetworkMismatch,
  useNetwork,
  useAddress,
  ChainId,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1, x: 0, y: 0 },
  closed: { opacity: 0, y: 0 },
};

const Navbar = ({ isHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const address = useAddress();

  const [, switchNetwork] = useNetwork();
  const isMismatched = useNetworkMismatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent py-4">
      <div
        className={`container mx-auto flex items-center justify-between px-6 lg:mb-0 ${
          isHome && !isOpen ? "mb-24" : ""
        }`}
      >
        <div className="flex items-center">
          <Link href="/" scroll={false}>
            <div className="-mb-8 -mt-8 block">
              <img src="/logo.svg" alt="Logo" className="w-20" />
            </div>
          </Link>
        </div>
        <div className="hidden items-center lg:flex">
          <Link href="/demo" className="mr-8 font-medium text-black">
            Demo
          </Link>
          <Link href="/market" className="mr-8 font-medium text-black">
            Marketplace
          </Link>
          <Link
            href="/items"
            className="mr-8 font-medium text-black"
            scroll={false}
          >
            Your Items
          </Link>
          {isMismatched && (
            <button
              className="mr-12 font-medium text-purple-400"
              onClick={() => switchNetwork(ChainId.Mumbai)}
            >
              Switch To Mumbai
            </button>
          )}
          <div className="z-50 mt-4 rounded-xl bg-white lg:mt-0 lg:mr-20">
            <ConnectWallet />
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center rounded-full px-3 py-2 text-black"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
        {isOpen && (
          <div className="bg-transparent py-4">
            <div className="container mx-auto flex flex-col items-center px-6 lg:flex-row lg:justify-between">
              <div className="flex flex-col items-center lg:flex-row">
                <Link
                  href="/demo"
                  className="mb-4 block font-medium text-black lg:mr-0 lg:mb-0 lg:inline-block"
                  scroll={false}
                >
                  Demo
                </Link>
                <Link
                  href="/items"
                  className="mb-4 block font-medium text-black lg:mr-0 lg:mb-0 lg:inline-block"
                >
                  Marketplace
                </Link>
                <Link
                  href="/items"
                  className="font-medium text-black"
                  scroll={false}
                >
                  Your Items
                </Link>
                {isMismatched && (
                  <button
                    className="fonf-modium tent-medium tex"
                    onClick={() => switchNetwork(ChainId.Mumbai)}
                  >
                    Switch To Mumbai
                  </button>
                )}
                <div className="z-50 mt-4 rounded-xl lg:mt-0 lg:mr-20">
                  <ConnectWallet />
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </nav>
  );
};

export default Navbar;
