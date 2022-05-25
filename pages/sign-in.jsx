import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/auth/auth.module.scss";
import Layout from "../components/auth/Layout";
import FormControl from "../components/auth/FormControl";
import { useToast, Button } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object({
    username: Yup.string().required("Email/Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const signInForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      signIn("credentials", {
        redirect: false,
        username: values.username,
        password: values.password,
      })
        .then((res) => {
          console.log(res);
          if (!res.error) router.push("/dashboard");
          toast({
            title: res.error ? "Error" : "Success",
            description: res.error ? res.error : "You are now signed in",
            status: res.error ? "error" : "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: error.message || "Something went wrong",
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
  return (
    <form onSubmit={signInForm.handleSubmit} className={styles.page_card}>
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

      <div className="text-lg font-bold">Continue Saving</div>
      <div className="text-sm">Fill the Following to proceed</div>

      <FormControl
        form={signInForm}
        fieldName="username"
        type="text"
        placeholder="Username or Email"
      />

      <FormControl
        form={signInForm}
        fieldName="password"
        type="password"
        placeholder="Password"
      />

      <div className="my-4 center">
        <Button
          type="submit"
          isLoading={isLoading}
          isFullWidth={true}
          colorScheme={"green"}
        >
          Sign In
        </Button>
      </div>

      <div className="my-4 center">
        <span className="text-gray-400">
          Not a member?
          <Link href="/sign-up" passHref={true}>
            <a className={styles.auth_link}>Sign Up</a>
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
SignIn.getLayout = Layout;
