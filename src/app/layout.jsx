import { Roboto } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "Paises",
    description: "Mi pagina de paises",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={roboto.className+" flex bg-blue-gray-100"}>
                <Sidebar />
                <main className="w-full">{children}</main>
            </body>
        </html>
    );
}
