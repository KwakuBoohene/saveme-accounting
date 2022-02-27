import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/general/component.module.scss';

export default function Header(){
    return(
        <div className={styles.header_body}>
            <div className="">
                <Image
                src='/assets/icons/logo.svg'
                alt="Logo"
                width={40}
                height={40}
                />
            </div>

            <div className="">
                <div className={styles.header_search_body}>
                    <div className="between">
                        <input type="text" placeholder="Search"
                        className={styles.header_search} />

                        <button className="cursor-pointer">
                            <Image
                            src='/assets/icons/search-icon.svg'
                            width={20}
                            height={20}
                            alt='Search Icon'
                            />
                        </button>  
                    </div>
                </div>
            </div>  

            <div className="">
                <Link
                passHref={true}
                href='/'>
                    <button className={styles.logout_button}>
                    Logout
                </button>
                </Link>
                
            </div>

        </div>
    )
}