import Sidebar from "../dashboard/Sidebar";
import Header from "./Header";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <title>
          SaveMe - A Personal Accounting App for your everyday internet user
        </title>
        <link rel="icon" href="./assets/icons/icon-transparent.png" />
      </Head>
      <div className="flex relative min-h-screen h-full">
        <Sidebar />

        <div
          className="px-6 min-h-screen w-full
              bg-gray-extra-light"
        >
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
