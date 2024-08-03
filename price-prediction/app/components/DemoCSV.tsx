'use client'

import Image from 'next/image';
import React from 'react'

const DemoCSV = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center">
        
        <p className="text-red-600 font-bold mb-2 text-lg">**Upload files which looks like this:</p>
        <Image src='/sample_csv_image.PNG' alt="sample-csv_image" 
        height={80} 
        width={320}
        priority={false}
        className="border-2 border-red-500 p-1 rounded-lg"
        
        />
        
      </div>
  )
}

export default DemoCSV;