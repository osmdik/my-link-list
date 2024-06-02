import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daiki Oshima</title>
        <meta
          name="description"
          content="This site is a collection of links to Daiki Oshima."
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="container flex justify-center items-center min-h-screen font-zenkaku">
        <div className="w-full max-w-sm">
          <figure className="w-28 mx-auto mb-6 aspect-square">
            <Image
              className="w-full h-full rounded-full"
              src="/oshima-daiki.jpg"
              alt="Daiki Oshima"
              width={150}
              height={150}
              priority={true}
              loading={"eager"}
            />
          </figure>
          <h1 className="mb-6 text-main text-lg font-normal text-center tracking-widest">
            Daiki Oshima
          </h1>
          <p className="mx-auto max-w-lg mb-8 text-left">
            My name is Daiki Oshima. I&apos;m a front-end engineer living in
            Izumo City, Shimane Prefecture. I&apos;m mainly involved in coding
            and directing website production.
          </p>
          <ButtonLink
            buttonName={"GitHub"}
            buttonUrl={"https://github.com/osmdik"}
            iconClass={"ri-github-fill"}
            external={true}
          />
          <ButtonLink
            buttonName={"en-filer.com"}
            buttonUrl={"https://en-filer.com/"}
            iconClass={"ri-global-line"}
            external={true}
          />
          <ButtonLink
            buttonName={"daiblog"}
            buttonUrl={"https://blog.osmdik.com/"}
            iconClass={"ri-links-line"}
            external={true}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
