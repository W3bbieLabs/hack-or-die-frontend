import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-full">
      <Head>
        <title>Hack or Die</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="relative -mt-24 flex h-full items-center">
        <ul className="mx-auto font-publicsans font-medium">
          <li className="flex items-center justify-between border border-b-0 border-black p-3">
            <span className="">DEMO</span>
            <Link href={"http://w3bbie.xyz/unity/hackordie3/"} target="_blank">
              <img className="ml-16 h-6 w-6" src="/arrow_button.svg"></img>
            </Link>
          </li>
          <li className="flex items-center justify-between border border-b-0 border-black p-3">
            <span className="">MARKETPLACE</span>
            <Link href={"/marketplace"}>
              <img className="ml-16 h-6 w-6" src="/arrow_button.svg"></img>
            </Link>
          </li>
          <li className="flex items-center justify-between border border-black p-3">
            <span className="">YOUR ITEMS</span>
            <Link href={"/your-items"}>
              <img className="ml-16 h-6 w-6" src="/arrow_button.svg"></img>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
