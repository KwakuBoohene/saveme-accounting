import prisma from "../../../lib/prisma";
import axios from "axios";

const createMonoAccount = async (req, res) => {
  const { code, email } = req.body;

  try {
    if (req.method === "POST") {
      const request = await axios.post(
        "https://api.withmono.com/account/auth",
        { code },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "mono-sec-key": process.env.NEXT_PUBLIC_MONO_LIVE_SK,
          },
        }
      );

      if (request.status === 200 || request.status === 201) {
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        const account = await prisma.transactionAccount.create({
          data: {
            user: { connect: { id: user.id } },
            accountName: user.username + "mono",
            accountType: "mono",
            monoAccountId: request.data.id || "N/A",
            accountDescription: "N/A",
            accountNumber: request.data.id || "N/A",
          },
        });

        res.status(201).json({
          success: true,
          mono_id: request.data.id,
          message: "Bank Account Created Successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default createMonoAccount;
