import React from 'react'
import Card from '../Card/Card';
import { Generationmix } from '../../interfaces/CarbonDataResponse';

interface Props {
  cardsData: Generationmix[]
}
const CardsLayout: React.FC = ({ cardsData }: Props) => {
  return (
    <div className=" bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map(data => <Card key={data.fuel} title={data.fuel} number={data.perc} label={data.label} />)}
      </div>
    </div>
  );
}

export default CardsLayout