import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="container bg-white">
      <div className={styles.header_body}>
        <div className="header-lhs flex">
          <span className="cursor-pointer mx-2">
            <Image
              src="/assets/icons/icon-transparent.png"
              alt="SaveMe Icon"
              width={40}
              height={50}
            ></Image>
          </span>

          <span className={styles.header_menu}>
            <a className={styles.menu_option}>How it Works</a>
            <a className={styles.menu_option}>About Us</a>
            <a className={styles.menu_option}>Contact Us</a>
          </span>
        </div>

        <div className={styles.header_rhs}>
          <Link href="/sign-in" passHref={true}>
            <button className={styles.sign_in_button + " button"}>
              {session ? "Go to Dashboard" : "Sign In"}
            </button>
          </Link>

          {!session && (
            <Link href="/sign-up" passHref={true}>
              <button className={styles.sign_up_button + " button"}>
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
