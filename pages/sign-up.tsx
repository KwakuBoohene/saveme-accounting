import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/auth/auth.module.scss";
import Layout from "../components/auth/Layout";
import FormControl from '../components/auth/FormControl';

export default function SignUp(){
    return(
            <div className={styles.page_card + ' mb-48'}>
                <div className="center py-6">
                    <Image
                    src='/assets/icons/icon-transparent.png'
                    width={100}
                    height={100}
                    alt='Icon Image'
                    />
                </div>

                <FormControl type='text' placeholder='First Name'/>
                <FormControl type='text' placeholder='Last Name'/>
                <FormControl type='text' placeholder='Username'/>    
                <FormControl type='email' placeholder='Email'/>
                <FormControl type='password' placeholder="Password"/>
                <FormControl type='password' placeholder="Repeat Password"/>


                <div className="my-4 center">
                    <button className={styles.auth_button}>
                            Sign Up
                    </button>
                </div>

                <div className="my-4 center">
                    <span className="text-gray-400">
                        Already a member? 
                        <Link
                        href='/sign-in'
                        passHref={true}>
                        <a className={styles.auth_link}
                            >Sign In</a>
                        </Link>
                    </span>
                </div>

           
            </div>

    )
}
SignUp.getLayout = Layout
