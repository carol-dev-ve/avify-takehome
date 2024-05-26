import React from 'react';

interface CardProps {
  title: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, number }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="text-3xl font-bold">{number}</div>
    </div>
  );
};

export default Card;