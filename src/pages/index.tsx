import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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
          <div className="mb-4">
            <a
              href="https://twitter.com/doshimaf"
              className="block py-2 rounded border border-gray-500 text-gray-600 text-center tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-twitter-fill align-bottom"></i> Twitter
            </a>
          </div>
          <div className="mb-4">
            <a
              href="https://github.com/doshimaf"
              className="block py-2 rounded border border-gray-500 text-gray-600 text-center tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-fill align-bottom"></i> GitHub
            </a>
          </div>
          <div>
            <a
              href="https://en-filer.com/"
              className="block py-2 rounded border border-gray-500 text-gray-600 text-center tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-global-line align-bottom"></i> en-filer.com
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
