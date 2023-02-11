import React, { useEffect, useState } from "react";
import {
  useAddress,
  useContract,
  Web3Button,
  useChainId,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import Link from "next/link";

const Marketplace = () => {
  const address = useAddress();
  const chainId = useChainId();
  const { contract } = useContract(
    "0x0AF1A56D27c0f69025Abc6968002FEbED9b5f775"
  );
  const [metadata, setMetadata] = useState({});
  const [isOwned, setIsOwned] = useState(false);

  useEffect(() => {
    const getMetadata = async () => {
      await contract?.get("0").then((data) => setMetadata(data.metadata));
    };
    const checkOwner = async () => {
      if (address) {
        await contract?.balanceOf(address, 0).then((data) => {
          if (Number(data) > 0) {
            setIsOwned(true);
          } else {
            setIsOwned(false);
          }
        });
      }
    };
    getMetadata();
    checkOwner();
  }, [address, contract]);

  return (
    <div className="relative -mt-24 flex h-full flex-col items-center justify-center">
      <h1 className="mb-2 font-bold">Bonus Character (Blu)</h1>
      <Link
        href="https://thirdweb.com/mumbai/0x0AF1A56D27c0f69025Abc6968002FEbED9b5f775?utm_source=contract_badge"
        target="_blank"
        className="mb-4"
      >
        <img
          width="200"
          height="45"
          src="https://badges.thirdweb.com/contract?address=0x0AF1A56D27c0f69025Abc6968002FEbED9b5f775&theme=dark&chainId=80001"
          alt="View contract"
        />
      </Link>
      <img src={metadata.image} className="mb-4 h-48 w-48 rounded-lg" />
      {address && chainId === 80001 && !isOwned && (
        <Web3Button
          contractAddress={"0x0AF1A56D27c0f69025Abc6968002FEbED9b5f775"}
          action={(cntr) => cntr.erc1155.claimTo(address, 0, 1)}
          onError={(err) => {
            console.error(err);
            alert("Error claiming NFTs");
          }}
          onSuccess={() => {
            setQuantity(1);
            alert("Successfully claimed NFTs");
          }}
        >
          Claim
        </Web3Button>
      )}
      {isOwned && (
        <span className="w-48 text-center">You already own this Character</span>
      )}
      {address && chainId !== 80001 && (
        <span className="w-48 text-center">
          Please switch to the Mumbai test network
        </span>
      )}
      {!address && (
        <span className="w-48 text-center">
          Please connect your wallet to claim
        </span>
      )}
    </div>
  );
};

export default Marketplace;
