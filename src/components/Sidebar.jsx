"use client";
import {
    Typography,
    List,
} from "@material-tailwind/react";
import Link from "next/link";
import { MagicMotion } from "react-magic-motion";
import { useState } from "react";


export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    return (
        <>
            <MagicMotion>
                <div
                    style={{
                        width: isCollapsed ? "3rem" : "20rem",
                    }}
                    className="md:h-screen hidden rounded-none bg-gray-700 p-4 shadow-xl lg:block"
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <button
                            style={{ cursor: "pointer", padding: 0, border: 0 }}
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            title={
                                isCollapsed
                                    ? "Expand Sidebar"
                                    : "Collapse Sidebar"
                            }
                        >
                            {isCollapsed ? (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M20.2877 6V18H22.2877V6H20.2877Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    style={{
                                        minWidth: "24px",
                                        minHeight: "24px",
                                    }}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M3 18V6H1V18H3Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="mb-2 p-4 ">
                        {!isCollapsed && (
                            <Typography
                                style={{ margin: 0 }}
                                variant="h2"
                                color="white"
                            >
                                LOGO
                            </Typography>
                        )}
                    </div>
                    <List className="text-white flex flex-col items-start gap-6">
                        {!isCollapsed && (
                            <Link style={{ margin: 0 }} href="/">
                                Dashboard
                            </Link>
                        )}
                        {!isCollapsed && (
                            <Link style={{ margin: 0 }} href="/vista1">
                                Vista 1
                            </Link>
                        )}
                        {!isCollapsed && (
                            <Link style={{ margin: 0 }} href="/vista2">
                                Vista 2
                            </Link>
                        )}
                    </List>
                </div>
            </MagicMotion>
        </>
    );
}
