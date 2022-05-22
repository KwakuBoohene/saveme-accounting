import MonoConnect from "@mono.co/connect.js";
import { Button } from "@chakra-ui/react";
import { useMemo } from "react";

function ConnectToMono() {
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_MONO_LIVE_PK || "SDFASDF";
  const monoConnect = useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
      key: PUBLIC_KEY,
    });

    monoInstance.setup();

    return monoInstance;
  }, []);
  return (
    <Button
      onClick={() => {
        monoConnect.open();
      }}
      colorScheme={"green"}
    >
      Connect with Mono
    </Button>
  );
}

export default ConnectToMono;
