"use client";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { continentes } from "@/data/continentes";
import { endpoint, filtroContinente } from "@/graphql/paises";
import { useState } from "react";

const Continentes = ({totalPaises, setPaisesCard}) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const nuevaQuery = e.target.value;
        setQuery(nuevaQuery);
    
        // Filtra los resultados basándose en la nuevaQuery
        const nuevosResultados = totalPaises.filter((pais) =>
            pais.name.toLowerCase().includes(nuevaQuery.toLowerCase())
        );
    
        setPaisesCard(nuevosResultados);
    };

    const handleClick = async (id) => {
        let variables;

        if (id === "AM") {
            const optionsSA = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: filtroContinente,
                    variables: {
                        id: "SA"
                    },
                }),
            };

            const optionsNA = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: filtroContinente,
                    variables: {
                        id: "NA"
                    },
                }),
            };

            // Realiza ambas solicitudes al mismo tiempo
            const [responseSA, responseNA] = await Promise.all([
                fetch(endpoint, optionsSA),
                fetch(endpoint, optionsNA),
            ]);

            const { data:{continent:{countries: countriesSA}} } = await responseSA.json();
            const { data:{continent:{countries: countriesNA}} } = await responseNA.json();
            // Combina los arrays dataSA y dataNA
            const combinedData = [...countriesNA, ...countriesSA];
            setPaisesCard(combinedData);
        } else {
            variables = {
                id
            };

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: filtroContinente, variables }),
            };

            const response = await fetch(endpoint, options);
            const { data:{continent:{countries}} } = await response.json();
            setPaisesCard(countries);
        }
    };

    return (
        <Menu placement="bottom-start">
            <MenuHandler>
                <input
                    type="search"
                    id="default-search"
                    className=" border-none w-full h-16 pt-6 ps-10 text-sm text-gray-900 border-gray-300 rounded-full bg-gray-50  sombreado"
                    placeholder="Escribe el País que deseas ver"
                    value={query}
                    onChange={handleInputChange}
                    required
                />
            </MenuHandler>
            <MenuList className="w-[36rem] mt-4">
                <div className="flex justify-between">
                    <Typography variant="h5" color="gray" textGradient>
                        Filtrar por continentes
                    </Typography>
                    <button
                        type="button"
                        className="text-blue-500 text-lg font-semibold"
                    >
                        Limpiar
                    </button>
                </div>

                <div className="grid md:grid-cols-3 py-4">
                    {continentes.map((continente) => (
                        <MenuItem
                            key={continente.id}
                            onClick={() => handleClick(continente.id)}
                        >
                            <Image
                                src={`https://res.cloudinary.com/dzngipsdy/image/upload/f_auto,q_auto/v1700025439/continentes/continent-${continente.id}.webp`}
                                alt={`imagen-${continente.nombre}`}
                                width={60}
                                height={50}
                                className="w-full h-[160px] object-cover rounded-3xl"
                            />
                            <h2 className="text-base font-semibold text-gray-600">
                                {continente.nombre}
                            </h2>
                        </MenuItem>
                    ))}
                </div>
            </MenuList>
        </Menu>
    );
};
export default Continentes;
