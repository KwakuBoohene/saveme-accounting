import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/auth/auth.module.scss";
import Layout from "../components/auth/Layout";
import FormControl from '../components/auth/FormControl';

export default function SignIn(){
    return(
            <div className={styles.page_card}>
                <div className="center py-6">
                    <Image
                    src='/assets/icons/icon-transparent.png'
                    width={100}
                    height={100}
                    alt='Icon Image'
                    />
                </div>

                <div className="text-center text-lg">
                    Continue Saving
                </div>
                <div className="text-center text-xs">
                    Fill the Following to proceed
                </div>
                
                <FormControl type='email' placeholder='Email'/>

                <FormControl type='password' placeholder="Password"/>


                <div className="my-4 center">
                    <Link 
                    href='/dashboard'
                    passHref={true}>
                        <button className={styles.auth_button}>
                                Sign In
                        </button>
                    </Link>
                   
                </div>

                <div className="my-4 center">
                    <span className="text-gray-400">
                        Not a member? 
                        <Link
                        href='/sign-up'
                        passHref={true}>
                        <a className={styles.auth_link}
                            >Sign Up</a>
                        </Link>
                    </span>
                </div>

           
            </div>

    )
}
SignIn.getLayout = Layout
