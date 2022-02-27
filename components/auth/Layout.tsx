import styles from "../../styles/auth/auth.module.scss";
import type {ReactElement} from 'react'


function Layout(children:ReactElement){
    return(
        <div className={styles.page_layout}>
        <div className="container">
            <div className="center">
            {children}
                
            </div>
        </div>

        <div className={styles.auth_footer}></div>
    </div>
    )
}

export default Layout