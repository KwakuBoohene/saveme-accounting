import prisma from "../../../lib/prisma";
import axios from "axios";

const handleRequest = async (req, res) => {
  try {
    if (req.method === "POST") {
      const {
        user,
        accountName,
        accountType,
        monoAccountId,
        accountDescription,
        accountNumber,
      } = req.body;
      const account = await prisma.transactionAccount.create({
        data: {
          user: { connect: { id: user } },
          accountName,
          accountType,
          monoAccountId,
          accountDescription,
          accountNumber,
        },
      });

      res.status(201).json({
        success: true,
        message: "Account Created Successfully",
      });
    }
    if (req.method === "GET") {
      const { email } = req.query;
      console.log("original email", email);
      const session = await axios.get(
        process.env.NEXTAUTH_URL + "/api/auth/session"
      );
      console.log(session.status);
      console.log(session.data);
      const accounts = await prisma.transactionAccount.findMany({
        where: {
          user: {
            email: "kwaku.kwayisi@gmail.com",
          },
        },
      });
      res.status(200).json({
        success: true,
        accounts: accounts,
        message: "Request successful.Here are your accounts",
      });
    }
    // res.status(405).json({
    //   success: false,
    //   message: "Method Not Allowed",
    // });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Creating Mono Account",
      error: error.toString(),
    });
    throw error;
  }
};

export default handleRequest;
