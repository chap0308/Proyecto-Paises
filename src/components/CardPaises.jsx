import {
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { MagicMotion } from "react-magic-motion";

const CardPaises = ({ toggleOpen, id, isSelected, pais, index}) => {
    
    return (
        <MagicMotion>
            <div className="w-80 lg:w-96 overflow-hidden mx-auto md:mx-0 rounded-[4rem] shadow-xl">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="amber"
                    className="m-0 rounded-none"
                >
                    <Image
                        src={`https://flagsapi.com/${pais.code}/flat/64.png`}
                        alt="ui/ux review check"
                        width={200}
                        height={180}
                        className="w-[200px] h-[150px] object-cover"
                    />
                </CardHeader>
                <CardBody  onClick={() => toggleOpen(id, index)} className={`flex flex-row max-h-[100px] py-3 ${isSelected ? "bg-blue-700" : "bg-white"}`}>
                    <Image
                        src={`https://flagsapi.com/${pais.code}/flat/64.png`}
                        alt="bandera"
                        width={64}
                        height={100}
                        className="w-[64px] h-auto ml-4"
                    />
                    <div className="ml-8">
                        <h2 className="text-2xl text-blue-400 font-bold line-clamp-1">
                            {pais.name}
                        </h2>
                        <Typography
                            variant="h5"
                            color="gray"
                            className="font-normal"
                        >
                            {pais.continent.name}
                        </Typography>
                    </div>
                </CardBody>
            </div>
        </MagicMotion>
    );
};
export default CardPaises;
