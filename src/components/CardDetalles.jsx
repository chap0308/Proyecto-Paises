"use client";
import {
    Collapse,
    List,
    ListItem,
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { endpoint, pais } from "@/graphql/paises";

const CardDetalles = ({ open, idSeleccionado }) => {
    const [paisSeleccionado, setPaisSeleccionado] = useState({});

    useEffect(() => {
        if (idSeleccionado) {
            const variables = {
                id: idSeleccionado,
            };

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: pais, variables }),
            };
            const fetchData = async () => {
                const response = await fetch(endpoint, options);
                const {
                    data: { country },
                } = await response.json();
                // console.log(country);
                setPaisSeleccionado(country);
            };
            fetchData();
        }
    }, [idSeleccionado]);

    return Object.keys(paisSeleccionado).length !== 0 ? (
        <Collapse open={open}>
            <Card className={`w-[380px] p-6`}>
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <Image
                        src={`https://flagsapi.com/${paisSeleccionado.code}/flat/64.png`}
                        alt="ui/ux review check"
                        width={200}
                        height={180}
                        className="w-[200px] h-[200px]"
                    />
                </CardHeader>
                <CardBody className={`flex flex-row max-h-[100px] py-3`}>
                    <Image
                        src={`https://flagsapi.com/${paisSeleccionado.code}/flat/64.png`}
                        alt="bandera"
                        width={64}
                        height={100}
                        className="w-[64px] h-auto ml-4"
                    />
                    <div className="ml-8 ">
                        <h2 className="text-blue-400 text-2xl font-bold">
                            {paisSeleccionado.name}
                        </h2>
                        <h2 className="font-normal text-xl">
                            {paisSeleccionado.continent?.name}
                        </h2>
                    </div>
                </CardBody>
                <div className="text-blue-400 text-xl font-bold">
                    <h2 className="">Capital: <span className="text-gray-700 font-light">{paisSeleccionado.capital}</span></h2>
                    <h2 className="">
                        Language: <span className="text-gray-700 font-light">{paisSeleccionado.languages[0]?.name}</span>
                    </h2>
                    <h2 className="">Currency: <span className="text-gray-700 font-light">{paisSeleccionado.currency}</span></h2>
                    <h2 className="">Region:</h2>
                    <Card className="w-full max-h-[160px] overflow-y-scroll">
                        <List>
                            {paisSeleccionado.states.length !== 0 ? paisSeleccionado.states.map((state, index) => (
                                <ListItem key={index} className="font-semibold">{state.name}</ListItem>
                            )): <ListItem className="font-bold">No hay datos</ListItem>}
                        </List>
                    </Card>
                </div>
            </Card>
        </Collapse>
    ) : null;
};
export default CardDetalles;
