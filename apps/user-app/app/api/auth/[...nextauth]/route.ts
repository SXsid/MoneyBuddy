import NextAuth from "next-auth";
import { userAuth } from "../user/auth";

const handler = NextAuth(userAuth)

export{handler as GET ,handler as POST}