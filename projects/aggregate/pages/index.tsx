import Head from "next/head";
import { Home } from "@/components/Home/Home";

import Molecules from "@libs/ui/src/molecules";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Aggregate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Molecules.DarkNavbar />
      
        <Home/>
      <Molecules.Footer />
    </>
  );
}
