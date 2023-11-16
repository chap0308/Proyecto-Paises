"use client";
import { Card, Typography, List } from "@material-tailwind/react";
import Link from "next/link";
import { MagicMotion } from "react-magic-motion";

export default function Sidebar() {

    return (
        <>
            <MagicMotion>
                <Card
                    color="gray"
                    className="md:h-screen w-full max-w-[18rem] hidden rounded-none p-4 shadow-xl lg:block shadow-blue-gray-900/5"
                >

                    <div className="mb-2 p-4 ">
                        <Typography variant="h2" color="white">
                            LOGO
                        </Typography>
                    </div>
                    <List className="text-white flex flex-col items-start gap-6">
                        <Link href="/">Dashboard</Link>
                        <Link href="/vista1">Vista 1</Link>
                        <Link href="/vista2">Vista 2</Link>
                    </List>
                </Card>
            </MagicMotion>
        </>
    );
}
