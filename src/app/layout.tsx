import {Metadata} from "next";
import {TheHeader} from "@/components/theHeader/TheHeader";
import {TheFooter} from "@/components/theFooter/TheFooter";
import "./globals.css";

export const metadata: Metadata = {
    title: "Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <TheHeader/>
                    <main className="container">{children}</main>
                <TheFooter/>
            </body>
        </html>
    );
}
