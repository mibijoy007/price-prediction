'use client'

import Image from 'next/image';
import React from 'react'

const DemoCSV = () => {
  return (
    <div className=" flex justify-center">
        <div>
        <p className="text-red-600 font-bold mb-2 text-xl">**Upload files which looks like this:</p>
        <Image src='/sample_csv_image.PNG' alt="sample-csv_image" 
        height={80} 
        width={350}
        priority={false}
        className="border-2 border-red-500 p-1 rounded-lg"
        
        />
        </div>
      </div>
  )
}

export default DemoCSV;