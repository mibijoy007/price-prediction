'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import PriceAreaSection from './PriceAreaSection'
import axios from 'axios'



const PPWithoutCsv = () => {
  const [area, setArea] = useState<string>('')
  // const [predictedPrice, setPredictedPrice] = useState<string>('')

  //demo price
  const [demoPredictedPrice, setDemoPredictedPrice] = useState<number>()

  const handleArea = (event: ChangeEvent<HTMLInputElement>) => {

    if (event.target.value) {
          setArea(event.target.value) //it's string so set 'area' as string
          // console.log(event.target.value);

    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/predict-price`, { area: area }, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const PredictedPrice = response.data.PredictedPrice
      // console.log("Frontend console data: ", response.data.PredictedPrice);

      setDemoPredictedPrice(PredictedPrice)

    } catch (error: any) {
      console.log("Error occured: ", error);
    }
  }


  return (
    <div className=" flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className='text-center'>
        {/* Insert area */}
        <div className="mt-10 text-2xl">
          <p className=''>
            To know the price, Enter <span className="font-bold">area </span> in (unit * unit):
          </p>
          <input type="number"
            required
            className="my-6 p-4  rounded-xl text-black"
            onChange={handleArea}
            placeholder='Here...' />
        </div>
        <button type="submit" className='rounded-xl bg-blue-500 py-4 px-10 text-white font-bold text-xl  transition ease-in-out  hover:scale-105 hover:bg-green-500 duration-300'>
          Predict Price
        </button>
      </form>

      {/* Desired price */}

      <div className="mt-24 text-xl text-center flex justify-center items-center ">
        <p className="font-bold font">
          Price is :
        </p>

        <div className="border-2 border-red-500 p-2 rounded-lg ml-2  w-36 h-18 overflow-x-auto">
          {
            demoPredictedPrice ? <span>{demoPredictedPrice}</span> : <span className="text-gray-500">---</span>
          }
        </div>

      </div >

    </div>
  )
}

export default PPWithoutCsv