import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/general/component.module.scss";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../store/store";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
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
    <div className={styles.header_body}>
      <div className="flex">
        <div className="mx-3 mt-1 lg:hidden">
          <span onClick={() => toggleShowSidebar()} className="cursor-pointer">
            <svg
              className="w-4 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>
          </span>
        </div>

        <div className={styles.header_search_body}>
          <div className="between">
            <input
              type="text"
              placeholder="Search"
              className={styles.header_search}
            />

            <button className="cursor-pointer">
              <Image
                src="/assets/icons/search-icon.svg"
                width={20}
                height={20}
                alt="Search Icon"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden justify-between mb-4">
        <div className="">
          <Button
            isLoading={isLoading}
            size="sm"
            onClick={handleSignOut}
            type="button"
            colorScheme={"red"}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
