import { Roboto } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "Descubre el Mundo: Exploración de Países por Continentes y Búsqueda",
    description: "Sumérgete en un viaje global explorando países a través de nuestro filtro por continentes y función de búsqueda. Desde la diversidad geográfica hasta las riquezas culturales, encuentra información detallada sobre cada rincón del mundo en nuestra página de países. ¡Embárcate en una experiencia única de descubrimiento y aprendizaje!",
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
