"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse, IconButton } from "@material-tailwind/react";
import Link from "next/link";

function NavbarList() {
    return (
        <ul className="flex flex-col items-center gap-2 text-center border-solid text-blue-700 font-bold p-6 mx-12 text-lg">
            <Link href="/">
                Dashboard
            </Link>
            <Link href="/vista1">
                Vista 1
            </Link>
            <Link href="/vista2">
                Vista 2
            </Link>
        </ul>
    );
}

export function NavList() {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <IconButton
                variant="text"
                className="flex justify-end mr-5 mt-5 md:hidden ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
            >
                {openNav ? (
                    <XMarkIcon className="h-10 w-10" strokeWidth={2} />
                ) : (
                    <Bars3Icon className="h-10 w-10" strokeWidth={2} />
                )}
            </IconButton>
            <Collapse open={openNav}>
                <NavbarList />
            </Collapse>
        </>
    );
}
