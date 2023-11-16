"use client";
import CardDetalles from "@/components/CardDetalles";
import CardPaises from "@/components/CardPaises";
import Continentes from "@/components/Continentes";
import { useEffect, useState } from "react";
import { endpoint, paises } from "@/graphql/paises";

export default function Home() {
    
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const [paisesCard, setPaisesCard] = useState([]);
    const [totalPaises, setTotalPaises] = useState([]);
    const [idSeleccionado, setIdSeleccionado] = useState("");
    const styles = {
        
        gridRow: `${position + 2} / ${position + 4}`,
        gridColumn: "1/2"
    };
    const styles2 = {
        
        gridRow: "1/4",
        gridColumn: "3/4",
    };

    const toggleOpen = (id, index) =>{
        
        // Verifica si el card actualmente seleccionado es diferente al card seleccionado anteriormente
        if (selectedCard !== id) {
            
            setSelectedCard(id);
            
            setOpen(true);
        } else {
            
            setSelectedCard(null);
            
            setOpen(false);
        }
        // console.log(index);
        const screenWidth = window.innerWidth;
        // console.log(screenWidth);  

        if(screenWidth<500){
            
            setPosition(index);
        }else{
            
            setPosition(null);
        }
        
        setIdSeleccionado(id);
        
    } 

    useEffect(() => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: paises }),
        };
        //Funcion para obtener los datos de la API
        const fetchData = async () => {
            const response = await fetch(endpoint, options);
            const {data} = await response.json();
            setPaisesCard(data.countries);
            setTotalPaises(data.countries);
        }
        fetchData();
    },[])

    return (
        <>
            <form className="max-w-[25rem] md:max-w-2xl mx-auto mt-10">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                    Search
                </label>
                <div className="relative">
                    <h2 className="absolute text-lg top-2 left-10 text-black">
                        País
                    </h2>
                    <Continentes totalPaises={totalPaises} setPaisesCard={setPaisesCard}/>
                    <button
                        type="submit"
                        className="flex items-center gap-4 md:mr-2 mb-[1.8px] text-white absolute end-2.5 bottom-2.5 bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-base px-4 py-2"
                    >
                        <svg
                            className="w-4 h-4 text-white "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        Buscar
                    </button>
                </div>
            </form>
            <div>
                <div className={`grid gap-8 md:grid-cols-3 justify-center md:justify-stretch md:mx-14 my-12`}>
                    {paisesCard?.map((pais, index) => (
                        <CardPaises
                            key={pais.code}
                            toggleOpen={toggleOpen}
                            id={pais.code}
                            isSelected={selectedCard == pais.code}
                            pais={pais}
                            index={index}
                        />
                    ))}
                    <div
                        style={
                            open ? position ? styles : styles2 : {
                                display: "none",
                            }
                        }
                    >
                        <CardDetalles open={open} idSeleccionado={idSeleccionado} />
                    </div>
                </div>
            </div>
        </>
    );
}
