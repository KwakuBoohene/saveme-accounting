import { PrismaClient } from "@prisma/client";
import {hash} from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
      try {
        if (req.method === 'POST') {
            //Getting email and password from body
            const { fname,lname,username,email, password } = req.body;
            //Validate
            if (!email || !email.includes('@') ||
             !password ||!lname ||!username ) {
                res.status(422).json({ message: 'Invalid Data' });
                return;
            }
            //CHeck Existing
            const existing_user = await prisma.user.findUnique({
                where: {
                    email,
                }
            })
    
            if(existing_user){
                res.status(422).json({
                    success: false,
                     message: 'User already exists' 
                });
                prisma.$disconnect();
            }
            const new_user = await prisma.user.create({
                data: {
                    fname,
                    lname,
                    username,
                    email,
                    password: await hash(password, 10),
                }
            })
            res.status(201).json({ 
                message: 'User created',
                user_id: new_user.id
             });
            prisma.$disconnect();
        } else {
            //Response for other than POST method
            res.status(500).json({ message: 'Route not valid' });
        }
          
      } catch (error) {
          res.status(400).json({
              success:false,
               message: 'Something went wrong',
            });
      }finally{

      }


  }