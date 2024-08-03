'use client'

import React, { useState } from 'react'
import PriceAreaSection, { Csvtype } from './PriceAreaSection'
import Footer from './Footer'
import ViewUploadedCSV from './ViewUploadedCSV'
import DemoCSV from './DemoCSV'

const PPWithCsv = () => {
  // this is csvData
  const [dataFromChild, setDataFromChild] = useState<Csvtype[]>();

  const handleDataFromChild = (data:any) => {
    setDataFromChild(data)
  }


  return (
    <div className="m-10 grid grid-cols-2">
        

      <PriceAreaSection  sendDataToParent={handleDataFromChild}/>

    
      {/* {csvData ? <ViewUploadedCSV csvData={csvData} /> : <DemoCSV/>} */}
      {dataFromChild ? <ViewUploadedCSV csvData={dataFromChild} /> : <DemoCSV/>}
      </div>
  )
}

export default PPWithCsv