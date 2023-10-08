import React from 'react';

const ProgramCard = () => {
  return (
      <div className="max-w-6xl container relative mx-auto h-96 bg-gray-800 border-solid border-2 p-4 flex flex-col justify-between leading-normal rounded-t-lg">
        <div className='px-0 text-center border-2 bg-black text-white w-full mr-0 ml-0 text-white'>THE PROGRAM INCLUDES</div>
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl h-20 mb-8 border-b-2 border-white"></div>
          <ul className="list-disc ml-5 text-white pb-10">
            <li>Under 12 years</li>
            <br />
            <li>Under 16 years</li>
            <br />
            <li>Under 17 years</li>
            <br />
            <li>Under 20 years</li>
            <br />
            <li>Senior Team</li>
            <br />
        </ul>
        </div>
      </div>
  )
}

export default ProgramCard;

  
