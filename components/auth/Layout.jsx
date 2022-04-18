import styles from "../../styles/auth/auth.module.scss";

import Head from "next/head";

function Layout(children) {
  return (
    <div className={styles.page_layout}>
      <Head>
        <title>
          SaveMe - A Personal Accounting App for your everyday internet user
        </title>
        <link rel="icon" href="./assets/icons/icon-transparent.png" />
      </Head>
      <div className="container">
        <div className="center">{children}</div>
      </div>

      <div className={styles.auth_footer}></div>
    </div>
  );
}

export default Layout;
