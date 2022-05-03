import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>
          SaveMe - A Personal Accounting App for your everyday internet user
        </title>
        <link rel="icon" href="/assets/icons/icon-transparent.png" />
        <script
          src="https://kit.fontawesome.com/2510de3e0b.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </SessionProvider>
  );
}
