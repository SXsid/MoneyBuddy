"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { Appbar } from "@repo/ui/Appbar";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
            <SessionProvider>
                
                {children}
            </SessionProvider>
    </RecoilRoot>
}