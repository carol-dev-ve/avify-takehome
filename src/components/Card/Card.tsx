import React from 'react';
import { MdWbSunny, MdOutdoorGrill, MdWarning, MdWindPower, MdWater, MdOilBarrel, MdForest, MdMoney, MdBolt } from "react-icons/md";
interface CardProps {
  title: string;
  number: number;
  label?:string
}

// Mapping Icons For Card Exclusively for Carbon Intensity
const iconSize = 20
const mappingIcon = {
  solar: <MdWbSunny color="yellow" size={iconSize} />,
  coal: <MdOutdoorGrill color="brown" size={iconSize} />,
  nuclear: <MdWarning color="green" size={iconSize} />,
  wind: <MdWindPower color="blue" size={iconSize} />,
  gas: <MdOilBarrel color="grey" size={iconSize} />,
  hydro: <MdWater color="blue" size={iconSize} />,
  imports: <MdMoney color="brown" size={iconSize} />,
  biomass: <MdForest color='green'size={iconSize}  />,
  other: <MdBolt color="black" size={iconSize} />
}

const backgroundCard = {
  biggest: 'bg-sky-100',
  lowest: 'bg-red-100'
}

const Card: React.FC<CardProps> = ({ title, number , label }) => {
  return (
    <div className ={` ${Object.keys(backgroundCard).includes(label)? backgroundCard[label] : 'bg-white'} shadow-md rounded-lg p-6 flex flex-col items-center justify-center`}>
      <div className="w-[100%] flex justify-between">
        <div className="text-gray-500 text-sm text-left uppercase">{title}</div>
        <div>{Object.keys(mappingIcon).includes(title) ? mappingIcon[title] : mappingIcon} </div>
      </div>
      <div className="text-3xl font-bold">{number}%</div>

    </div>
  );
};

export default Card;