import MonoConnect from "@mono.co/connect.js";
import { Button } from "@chakra-ui/react";
import { useState, useCallback } from "react";

function ConnectToMono() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const openMonoWidget = useCallback(async () => {
    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const monoInstance = new MonoConnect({
      key: "PUBLIC_KEY",
      onClose: () => console.log("Widget closed"),
      onLoad: () => setScriptLoaded(true),
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
    });

    monoInstance.setup();
    monoInstance.open();
  }, []);
  return (
    <Button
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
