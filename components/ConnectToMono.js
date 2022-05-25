import MonoConnect from "@mono.co/connect.js";
import { Button, useToast } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import useStore from "../store/store";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

function ConnectToMono() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setMonoCode = useStore((state) => state.setMonoCode);
  const monoCode = useStore((state) => state.mono_account_code);
  const router = useRouter();
  const { data: session, status } = useSession();
  const toast = useToast();

  const openMonoWidget = useCallback(async () => {
    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const monoInstance = new MonoConnect({
      key: process.env.NEXT_PUBLIC_MONO_LIVE_PK,
      onClose: () => console.log("Widget closed"),
      onLoad: () => setScriptLoaded(true),
      onSuccess: ({ code }) => {
        setMonoCode(code);
        setIsLoading(true);
        axios
          .post(process.env.NEXT_PUBLIC_BASE_URL + "/api/mono/getid", {
            code,
            email: session?.user?.email,
          })
          .then((res) => {
            if (res.status === 201) {
              toast({
                title: "Mono Account Created Successfully",
                description: "Mono Account Created Successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }
            router.reload();
          })

          .catch((err) => {
            console.log(err);
            toast({
              title: "Error Creating Mono Account",
              description: `Error Creating Mono Account.Please check your console and your network tab for the error message`,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      },
    });

    monoInstance.setup();
    monoInstance.open();
  }, []);
  return (
    <Button
      size={"sm"}
      isLoading={isLoading}
      onClick={() => {
        openMonoWidget();
      }}
      colorScheme={"green"}
    >
      Connect with Mono
    </Button>
  );
}

export default ConnectToMono;
