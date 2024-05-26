import React, { useState } from 'react';

const Accordion: React.FC<{ title: string }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded mb-4 mt-4">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="text-bold">
          <h1 className="font-bold">{title}</h1>
        </div>
        <svg className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414zM10 13a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1z" clipRule="evenodd"></path>
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 mx-auto w-full max-w-full flex flex-col md:flex-row justify-center max-h-[500px]">
          {children}
        </div>
      )}
    </div>
)
}

export default Accordion;