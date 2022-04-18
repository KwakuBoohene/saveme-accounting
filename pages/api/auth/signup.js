import prisma from "../../../lib/prisma";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { email, password, fname, lname, username } = req.body;

  try {
    if (req.method === "POST") {
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (user) {
        res.status(400).json({
          success: false,
          message: "User already exists",
        });
      }
      const encryptedPassword = await bcrypt.hash(password, 12);
      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          fname,
          lname,
          username,
        },
      });
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser,
      });
    }
    res.status(400).json({
      success: false,
      message: "This request is not allowed",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default signup;
