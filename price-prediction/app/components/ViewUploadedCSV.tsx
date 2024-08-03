'use client'

import Image from 'next/image';
import React, { FC, useState } from 'react'
import { CsvDisplayProps } from './PriceAreaSection';

const ViewUploadedCSV:FC<CsvDisplayProps> = ({csvData}) => {
  const [seeMore, setSeeMore] = useState<boolean>()


  const handleSeeMore = () => {
    setSeeMore(true)
  }


  return (
    <div className=" flex justify-center">
    <div className='text-center'>
    <p className="text-green-600 font-bold mb-2 text-xl">**Here's your file:</p>
    {/* <Image src='/sample_csv_image.PNG' alt="sample-csv_image" 
    height={80} 
    width={350}
    className="border-2 border-red-500 p-1 rounded-lg"
    
    /> */}

    <button onClick={handleSeeMore}>See more</button>

    {/* here is the csv file */}

      <div className="border-2 border-sky-500 p-2 rounded-lg">
      {csvData.length > 0 && (
        <table border={2} className=' p-3'>
          <thead>
            <tr >
              {Object.keys(csvData[0]).map((key) => (
                <th key={key} className='p-3 border-2 border-yellow-600' >{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index} className='p-5'>
                {Object.values(row).map((value, i) => (
                  <td className='p-3 border-2 border-yellow-600' key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>

    </div>
  </div>
  )
}

export default ViewUploadedCSV;