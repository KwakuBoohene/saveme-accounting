import Layout from "../../components/general/Layout";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";

const Mono = dynamic(
  () => {
    return import("../../components/ConnectToMono");
  },
  { ssr: false }
);

export default function Expenses() {
  const [exchangeToken, setExchangeToken] = useState({});
  useEffect(() => {
    axios
      .post(
        "https://api.withmono.com/account/auth",
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "mono-sec-key": process.env.NEXT_PUBLIC_MONO_LIVE_SK || "",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setExchangeToken(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      These are the expenses
      <Mono />
    </div>
  );
}

Expenses.getLayout = Layout;
