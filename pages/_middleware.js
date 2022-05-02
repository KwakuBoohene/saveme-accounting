import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const public_pages = ["/sign-in", "/sign-up", "/"];
  const page = req?.page?.name;

  if (page) {
    if (
      !public_pages.includes(req.page.name) &&
      !req.page.name.includes("api") &&
      !session
    ) {
      return NextResponse.redirect("/");
    }
  }
}
