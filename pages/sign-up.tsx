import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/auth/auth.module.scss";
import Layout from "../components/auth/Layout";
import FormControl from '../components/auth/FormControl';
import { useFormik } from "formik";

export default function SignUp(){
    const signUpForm = useFormik({
        initialValues: {
          fname: '',
          lname: '',
          email: '',
          password: '',
          repeatPassword: '',
          username: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
            <form onSubmit={signUpForm.handleSubmit} className={styles.page_card + ' mb-48'}>
                <div className="center py-6">
                    <Image
                    src='/assets/icons/icon-transparent.png'
                    width={100}
                    height={100}
                    alt='Icon Image'
                    />
                </div>

                <FormControl form={signUpForm} fieldName='fname' type='text' placeholder='First Name'/>
                <FormControl form={signUpForm} fieldName='lname'  type='text' placeholder='Last Name'/>
                <FormControl form={signUpForm} fieldName='username' type='text' placeholder='Username'/>    
                <FormControl form={signUpForm} fieldName='email' type='email' placeholder='Email'/>
                <FormControl form={signUpForm} fieldName='password' type='password' placeholder="Password"/>
                <FormControl form={signUpForm} fieldName='repeatPassword' type='password' placeholder="Repeat Password"/>


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

           
            </form>

    )
}
SignUp.getLayout = Layout
