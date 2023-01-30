import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hack or Die</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
    </div>
  );
}
