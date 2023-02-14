import React, { useEffect, useState } from "react";
import {
  useAddress,
  useContract,
  Web3Button,
  useChainId,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import Link from "next/link";

const images = ["/reward1.png", "/reward2.png", "/reward3.png", "/reward4.png"];

const Marketplace = () => {
  const address = useAddress();
  const chainId = useChainId();
  const { contract } = useContract(
    "0x0AF1A56D27c0f69025Abc6968002FEbED9b5f775"
  );
  const { rewardContract } = useContract(
    "0xFE4Fa4925E8571F0f6552C7dDc5d386b47A31578"
  );
  const [rewardMetadata, setRewardMetadata] = useState({});
  const [isOwnedReward, setIsOwnedReward] = useState(false);
  const [characterMetadata, setCharacterMetadata] = useState({});
  const [isOwnedCharacter, setIsOwnedCharacter] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const getMetadata = async () => {
      await contract
        ?.get("0")
        .then((data) => setCharacterMetadata(data.metadata));
      setRewardMetadata();
    };
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 1000);
    const checkOwner = async () => {
      if (address) {
        await contract?.balanceOf(address, 0).then((data) => {
          if (Number(data) > 0) {
            setIsOwnedCharacter(true);
          } else {
            setIsOwnedCharacter(false);
          }
        });
      }
    };
    getMetadata();
    checkOwner();
    return () => {
      clearInterval(intervalId);
    };
  }, [address, contract, currentImage]);

  return (
    <div className="relative flex flex-col items-center justify-center lg:-mt-24 lg:h-full lg:flex-row">
      <div className="relative mr-8 flex h-full flex-col items-center justify-center lg:-mt-24">
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
        <img
          src={characterMetadata.image}
          className="mb-4 h-48 w-48 rounded-lg"
        />
        {address && chainId === 80001 && !isOwnedCharacter && (
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
        {isOwnedCharacter && (
          <span className="w-48 text-center">
            You already own this Character
          </span>
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
      <div className="relative flex h-full flex-col items-center justify-center lg:-mt-24">
        <h1 className="mb-2 font-bold">Rewards Token</h1>
        <Link
          href="https://thirdweb.com/mumbai/0xFE4Fa4925E8571F0f6552C7dDc5d386b47A31578?utm_source=contract_badge"
          target="_blank"
          className="mb-4"
        >
          <img
            width="200"
            height="45"
            src="https://badges.thirdweb.com/contract?address=0xFE4Fa4925E8571F0f6552C7dDc5d386b47A31578&theme=dark&chainId=80001"
            alt="View contract"
          />
        </Link>
        <img src={images[currentImage]} className="mb-4 h-48 w-48 rounded-lg" />
        {/* {address && chainId === 80001 && !isOwnedCharacter && (
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
        )} */}
        {/* {isOwnedCharacter && (
          <span className="w-48 text-center">
            You already own this Character
          </span>
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
        )} */}
        <span className="mb-6 w-48 text-center">Coming soon!</span>
      </div>
    </div>
  );
};

export default Marketplace;
