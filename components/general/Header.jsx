import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/general/component.module.scss";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);

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
      <div className="">
        <Image src="/assets/icons/logo.svg" alt="Logo" width={40} height={40} />
      </div>

      <div className="">
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

      <div className="flex">
        <div className="mx-2">Hello {session?.user.email}</div>
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
