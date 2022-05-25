/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import useStore from "../../store/store";
import SidebarItem from "./SidebarItem";
import { sidebarmenu } from "./sidebar_menu";
import { Button } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isLoading, setIsLoading] = useState(false);
  const show_sidebar = useStore((state) => state.show_sidebar);
  const toggleShowSidebar = useStore((state) => state.toggleShowSidebar);
  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-96  min-h-screen bg-green-primary/10 lg:block hidden">
        <Menu />
      </div>

      {show_sidebar && (
        <div className="animate-fade-in-point-5 lg:hidden h-full absolute z-50 w-screen bg-gray-500 bg-opacity-30">
          <div className="w-full h-full flex justify-between">
            <div className="w-[250px] min-h-full bg-gray-800 opacity-100">
              <Menu />
              <div className="w-full flex justify-center">
                <Button
                  isLoading={isLoading}
                  size="sm"
                  className="!rounded-none hover:scale-90 transition-all duration-300"
                  isFullWidth={true}
                  onClick={handleSignOut}
                  type="button"
                  colorScheme={"red"}
                >
                  Logout
                </Button>
              </div>
            </div>
            <div className="pt-2 pr-1">
              <span
                onClick={() => {
                  toggleShowSidebar();
                }}
                className="cursor-pointer"
              >
                <Image
                  src="/assets/icons/close.svg"
                  alt="close sidebar"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const Menu = () => {
  const { data: session, status } = useSession();
  const setEmail = useStore((state) => state.setEmail);
  const email = useStore((state) => state.email);
  useEffect(() => {
    if (email === "" && session?.user?.email) {
      setEmail(session?.user?.email);
    }
  }, []);

  return (
    <>
      <div className="center mt-10">
        <img
          src="/assets/icons/icon-transparent.png"
          className="h-16 w-auto"
          alt=""
        />
      </div>
      {session && (
        <>
          <div className="text-center mt-10 lg:text-gray-600 text-white">
            <p className="">
              <span className="mx-2">
                <i className="fa-solid fa-user"></i>
              </span>
              {session.user.email}{" "}
            </p>
          </div>
        </>
      )}
      <div className=""></div>

      <div className="mt-3">
        {sidebarmenu.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              icon_alt={item.icon_alt}
              name={item.name}
              url={`/${item.url}`}
              icon_src={`/assets/icons/${item.icon_src}`}
            />
          );
        })}
      </div>
    </>
  );
};
