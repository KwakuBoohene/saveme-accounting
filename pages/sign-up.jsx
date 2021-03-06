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
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
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
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      axios
        .post("/api/register/signup", values)
        .then((res) => {
          toast({
            title: "Success",
            description: "You have successfully signed up",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          signIn("credentials", {
            callbackUrl: "/dashboard",
            username: values.email,
            password: values.password,
          }).then((res) => {
            router.push("/dashboard");
          });
          resetForm();
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
        <a className="cursor-pointer">
          <Link href={"/"}>
            <Image
              src="/assets/icons/icon-transparent.png"
              width={100}
              height={100}
              alt="Icon Image"
            />
          </Link>
        </a>
      </div>

      <div className="text-lg font-bold">Start your saving journey here!</div>
      <div className="text-sm">Fill the Following to proceed</div>

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
          isFullWidth={true}
          colorScheme={"green"}
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
SignUp.getLayout = Layout;
