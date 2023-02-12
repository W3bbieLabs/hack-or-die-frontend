import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import BLU from "../components/BLU";
import BLK from "../components/BLK";
import {
  useAddress,
  useContract,
  Web3Button,
  useChainId,
  useOwnedNFTs,
} from "@thirdweb-dev/react";

const Items = () => {
  const address = useAddress();
  const chainId = useChainId();
  const { contract } = useContract(
    "0x0AF1A56D27c0f69025Abc6968002FEbED9b5f775"
  );

  const [isOwned, setIsOwned] = useState(false);

  useEffect(() => {
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
    checkOwner();
  }, [address, contract]);

  return (
    <>
      <div className="relative mt-14 flex h-[85%] flex-col items-center justify-center lg:flex-row">
        <>
          {address && isOwned && (
            <Canvas
              className="w-[50%] sm:h-20 sm:w-20"
              style={{ width: `25%`, height: `100%`, position: `relative` }}
              concurrent
              pixelRatio={[1, 2]}
              camera={{ position: [0, 0, 2] }}
            >
              <ambientLight intensity={0.3} />
              <spotLight
                intensity={0.3}
                angle={0.1}
                penumbra={1}
                position={[5, 25, 20]}
              />
              <Suspense fallback={null}>
                <BLU />
              </Suspense>
            </Canvas>
          )}
        </>

        <Canvas
          className="w-[50%] sm:h-20 sm:w-20"
          style={{ width: `25%`, height: `100%`, position: `relative` }}
          concurrent
          pixelRatio={[1, 2]}
          camera={{ position: [0, 0, 2] }}
        >
          <ambientLight intensity={0.3} />
          <spotLight
            intensity={0.3}
            angle={0.1}
            penumbra={1}
            position={[5, 25, 20]}
          />
          <Suspense fallback={null}>
            <BLK />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Items;
