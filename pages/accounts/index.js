import Layout from "../../components/general/Layout";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";

const Mono = dynamic(
  () => {
    return import("../../components/ConnectToMono");
  },
  { ssr: false }
);

function Accounts({ accounts, ...props }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-sm text-center lg:text-left">
        Create A New Account Manually here{" "}
        <Button
          size={"sm"}
          className="my-1 lg:my-0"
          colorScheme={"blue"}
          mx={2}
        >
          Create Account
        </Button>{" "}
        or <Mono />
      </div>

      {accounts.length < 1 ? (
        <>
          <div className="w-full">
            <div className="overflow-x-scroll font-bold w-full flex justify-center my-5">
              NO ACCOUNTS FOUND
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-center">
            <div className="overflow-x-scroll w-full  lg:max-w-3xl">
              <table className="w-full  sm:bg-white rounded overflow-hidden sm:shadow-lg my-5">
                <thead className="text-white">
                  <>
                    <tr className="bg-green-primary  rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                      <th className="px-2 text-left">Account Name</th>
                      <th className="px-2 text-left">Account No.</th>
                      <th className="px-2 text-left">Account Type</th>
                      <th className="px-2 text-left">Account Description</th>
                      <th className="px-2 text-left w-24">Actions</th>
                    </tr>
                  </>
                </thead>
                <tbody className="">
                  {accounts.map((account) => {
                    return (
                      <tr
                        key={account.id}
                        className="rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                      >
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {account.accountName}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {account.accountNumber}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {account.accountType}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {account.accountDescription}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                          Delete
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);
    const accounts = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/api/accounts?email=" +
        session.user.email
    );
    console.log(accounts.data);
    return {
      props: {
        accounts: accounts.data.accounts,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        accounts: [],
      },
    };
  }
}

export default Accounts;

Accounts.getLayout = Layout;
