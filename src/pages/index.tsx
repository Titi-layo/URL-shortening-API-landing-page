import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Form } from "../components/form/form";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero /hero";
import { Statistics } from "../components/statistics/statistics";
import { Boost } from "../components/boost/boost";
import { Footer } from "../components/footer/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <Form />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
};

export default Home;
