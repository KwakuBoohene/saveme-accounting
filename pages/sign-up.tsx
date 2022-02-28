import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/auth/auth.module.scss";
import Layout from "../components/auth/Layout";
import FormControl from '../components/auth/FormControl';
import { useState } from "react";

export default function SignUp(){
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [errorMessages,setErrorMessages] = useState({
        fname:null,
        lname:null,
        username:null,
        email:null,
        password:null,
        rpassword:null
    })

    const cancelSubmit = (event) =>{
        if(
            event.target.lname.value==='' 
        || event.target.lname===null ||
         event.target.username.value==='' ||
          event.target.username.value===null ||
          event.target.email.value===null ||
          event.target.password.value===null ||
          event.target.rpassword.value===null ||
          event.target.rpassword.value!==event.target.password.value
        ){
            return false
        }else{
            return true
        }
    }


    const  submitData =  async (event) => {
        event.preventDefault();
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: event.target.email.value,
                username:event.target.username.value,
                fname:event.target.fname.value,
                lname:event.target.lname.value,
                
                password: event.target.password.value,
            }),
        });
        //Await for data for any desirable next steps
        const data = await res.json();
        console.log(data);      
        if(cancelSubmit(event)===false){
            return
        }     
    }
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
                
                <form onSubmit={submitData} className="w-full">
                    <FormControl type='text'
                    error={errorMessages.fname}
                    name='fname' placeholder='First Name'/>
                    <FormControl
                    error={errorMessages.lname}
                    name='lname' type='text' placeholder='Last Name'/>
                    <FormControl
                    error={errorMessages.username}
                    name='username' type='text' placeholder='Username'/>    
                    <FormControl
                    error={errorMessages.email}
                    name='email' type='email' placeholder='Email'/>
                    <FormControl
                    error={errorMessages.password}
                    name='password' type='password' placeholder="Password"/>
                    <FormControl
                    error={errorMessages.rpassword}
                    name='rpassword' type='password' placeholder="Repeat Password"/>

                    <div className="my-4 center">
                        <button className={styles.auth_button}>
                            Sign Up
                        </button>
                    </div>
                </form>
                


               

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
