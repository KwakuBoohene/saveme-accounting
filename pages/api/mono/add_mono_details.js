import prisma from "../../../lib/prisma";
import axios from "axios";

const addMonoAccountDetailsToTransaction = async (req, res) => {
  const { account_number } = req.body;

  try {
    if (req.method === "POST") {
      const request = await axios.get(
        "https://api.withmono.com/accounts/" + account_number,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "mono-sec-key": process.env.NEXT_PUBLIC_MONO_LIVE_SK,
          },
        }
      );

      if (request.status === 200 || request.status === 201) {
        const db_account = await prisma.transactionAccount.updateMany({
          where: {
            accountNumber: account_number,
          },
          data: {
            monoDetails: request.data.account,
          },
        });

        const account = await prisma.transactionAccount.findFirst({
          where: {
            accountNumber: account_number,
          },
        });
        res.status(200).json({
          success: true,
          updated_Account: account,
          message: "Mono Account Details Added Successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "request failed",
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default addMonoAccountDetailsToTransaction;
