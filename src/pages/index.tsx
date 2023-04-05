import Head from "next/head";
import { useRef } from "react";

import Benchmarks from "@/components/Benchmarks";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import OrderButton from "@/components/OrderButton";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const benchmarkRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Solorbit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderButton />
      <main className={styles.main}>
        <Hero scrollDownRef={benchmarkRef} />
        <Benchmarks ref={benchmarkRef} />
        <Features />
        <Faq />
      </main>
    </>
  );
}
