import Link from "next/link";
import Image from "next/image";
import styles from "../styles/auth/auth.module.scss";
import Layout from "../components/auth/Layout";
import FormControl from "../components/auth/FormControl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const toast = useToast();
  const validationSchema = Yup.object({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    username: Yup.string().required("Username is required"),
  });
  const signUpForm = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      axios
        .post("/api/auth/signup", values)
        .then((res) => {
          console.log(res);
          toast({
            title: "Success",
            description: "You have successfully signed up",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Error",
            description: "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  return (
    <form
      onSubmit={signUpForm.handleSubmit}
      className={styles.page_card + " mb-48"}
    >
      <div className="center py-6">
        <Image
          src="/assets/icons/icon-transparent.png"
          width={100}
          height={100}
          alt="Icon Image"
        />
      </div>

      <FormControl
        form={signUpForm}
        fieldName="fname"
        type="text"
        placeholder="First Name"
      />
      <FormControl
        form={signUpForm}
        fieldName="lname"
        type="text"
        placeholder="Last Name"
      />
      <FormControl
        form={signUpForm}
        fieldName="username"
        type="text"
        placeholder="Username"
      />
      <FormControl
        form={signUpForm}
        fieldName="email"
        type="email"
        placeholder="Email"
      />
      <FormControl
        form={signUpForm}
        fieldName="password"
        type="password"
        placeholder="Password"
      />
      <FormControl
        form={signUpForm}
        fieldName="confirmPassword"
        type="password"
        placeholder="Repeat Password"
      />

      <div className="my-4 center">
        <Button
          isLoading={isLoading}
          type="submit"
          className={styles.auth_button}
        >
          Sign Up
        </Button>
      </div>

      <div className="my-4 center">
        <span className="text-gray-400">
          Already a member?
          <Link href="/sign-in" passHref={true}>
            <a className={styles.auth_link}>Sign In</a>
          </Link>
        </span>
      </div>
    </form>
  );
}
SignUp.getLayout = Layout;
