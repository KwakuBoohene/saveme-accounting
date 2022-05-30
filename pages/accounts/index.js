import Layout from "../../components/general/Layout";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  SkeletonText,
} from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";
import { currencyPipe } from "../../lib/helper";

const Mono = dynamic(
  () => {
    return import("../../components/ConnectToMono");
  },
  { ssr: false }
);

function Accounts({ accounts, ...props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadedAccounts, setLoadedAccounts] = useState(accounts);

  const [selectedAccount, setSelectedAccount] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [accountLoading, setAccountLoading] = useState("unloaded");
  const toast = useToast();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState(null);

  const LoadAccounts = () => {
    setAccountLoading("started");
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "/api/accounts?email=" + email)
      .then((res) => {
        setLoadedAccounts(res.data.accounts);
        toast({
          title: "Success",
          description: "Your data has been saved",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error ",
          description: `Error while retrieving data from the database.Please check your console and your network tab for the error message`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => {
        setAccountLoading("end");
      });
  };

  const LoadMonoDetails = (accountNumber) => {
    setIsLoading(true);
    axios
      .post("/api/mono/add_mono_details", { account_number: accountNumber })
      .then((response) => {
        setSelectedAccount(response.data.updated_Account);
        LoadAccounts();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (session) {
      setEmail(session.user?.email);
    }
  }, []);

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
        or <Mono callbackFxn={() => LoadAccounts()} />
      </div>

      {loadedAccounts.length < 1 && accountLoading !== "started" && (
        <>
          <div className="w-full">
            <div className=" font-bold w-full flex justify-center my-5">
              NO ACCOUNTS FOUND
            </div>
          </div>
        </>
      )}
      {loadedAccounts.length > 0 && accountLoading !== "started" && (
        <>
          <div className="w-full flex justify-center">
            <div className="overflow-scroll hide_scrollbar  w-full  lg:max-w-3xl">
              <table className="w-full  sm:bg-white rounded  my-5">
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
                  {loadedAccounts.map((account) => {
                    return (
                      <tr
                        key={account.id}
                        className="rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                      >
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {(account.monoDetails
                            ? account.monoDetails.institution.name
                            : account.accountName) || "N/A"}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {(account.monoDetails
                            ? account.monoDetails.accountNumber
                            : account.accountNumber) || "N/A"}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {account.accountType}
                          {(account.monoDetails
                            ? "(" + account.monoDetails.type + ")"
                            : "") || ""}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                          {account.accountDescription}
                        </td>
                        <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                          <Button mx={1} colorScheme={"red"} size={"xs"}>
                            Delete
                          </Button>
                          <Button
                            mx={1}
                            colorScheme={"green"}
                            size={"xs"}
                            onClick={() => {
                              setSelectedAccount(account);
                              onOpen();
                            }}
                          >
                            Edit
                          </Button>
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

      {accountLoading === "started" && (
        <div className="w-full flex justify-center">
          <div className="bg-white border p-4 rounded-lg w-full  lg:max-w-3xl">
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </div>
        </div>
      )}

      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Account ID: {selectedAccount.id}</ModalHeader>
          <ModalCloseButton outline={0} />
          <ModalBody>
            <div className="mx-4">
              <div className="grid lg:grid-cols-2">
                <div className="">
                  <span className="">Account Name :</span>
                  <span className="font-bold mx-2">
                    {selectedAccount.accountName}{" "}
                  </span>
                </div>
                <div className="">
                  <span className="">Account Number :</span>
                  <span className="font-bold mx-2">
                    {selectedAccount.accountNumber}{" "}
                  </span>
                </div>
                <div className="">
                  <span className="">Account Type :</span>
                  <span className="font-bold mx-2">
                    {selectedAccount.accountType}{" "}
                  </span>
                </div>
                <div className="">
                  <span className="">Account Description :</span>
                  <span className="font-bold mx-2">
                    {selectedAccount.accountDescription || "N/A"}{" "}
                  </span>
                </div>
              </div>
              {!selectedAccount.monoDetails && (
                <div className="my-5 flex justify-center">
                  <Button
                    isLoading={isLoading}
                    size={"sm"}
                    colorScheme={"green"}
                    onClick={() => {
                      LoadMonoDetails(selectedAccount.accountNumber);
                    }}
                  >
                    Load Mono Details
                  </Button>
                </div>
              )}
              {selectedAccount.monoDetails && (
                <div className="grid lg:grid-cols-2 my-4">
                  <div className="">
                    <span className="">Account Number :</span>
                    <span className="font-bold">
                      {selectedAccount.monoDetails?.accountNumber || "N/A"}
                    </span>
                  </div>
                  <div className="">
                    <span className="">Balance :</span>
                    <span className="font-bold">
                      {selectedAccount.monoDetails
                        ? currencyPipe(
                            (selectedAccount.monoDetails?.balance || 0) * 0.01,
                            selectedAccount?.monoDetails?.currency || "USD"
                          )
                        : "N/A"}
                    </span>
                  </div>
                  <div className="">
                    <span className="">Institution Name: </span>
                    <span className="font-bold">
                      {selectedAccount.monoDetails?.institution?.name || "N/A"}
                    </span>
                  </div>
                  <div className="">
                    <span className="">Name of Account Holder: </span>
                    <span className="font-bold">
                      {selectedAccount.monoDetails?.name || "N/A"}
                    </span>
                  </div>
                  <div className="">
                    <span className="">Account Type: </span>
                    <span className="font-bold">
                      {selectedAccount.monoDetails?.type || "N/A"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              outline={0}
              colorScheme="red"
              mr={3}
              size={"sm"}
              onClick={onClose}
            >
              Close
            </Button>
            <Button outline="0" size={"sm"} colorScheme={"green"}>
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
