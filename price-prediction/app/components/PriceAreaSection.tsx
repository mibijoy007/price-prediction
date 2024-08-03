'use client'

import axios from 'axios'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import DemoCSV from './DemoCSV'
import ViewUploadedCSV from './ViewUploadedCSV'


export interface Csvtype {
    'area': string;
    'price': string;
}

export interface CsvDisplayProps {
    csvData: Csvtype[];
}

export interface ChildComponentProps {
    sendDataToParent?: (data: any) => void;
  }

const PriceAreaSection = ({sendDataToParent }:ChildComponentProps) => {
    const [file, setFile] = useState<File | null>(null)
    const [area, setArea] = useState<string>('')
    // const [predictedPrice, setPredictedPrice] = useState<string>('')

    const [csvData, setCsvData] = useState<Csvtype[]>()

    const [fileMessage, setFileMessage] = useState<string>('')

    //demo price
    const [demoPredictedPrice, setDemoPredictedPrice] = useState<number>()



    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
            // console.log("logggg >> ",event.target.files[0].type);
            const fileTypeIsCsv = event.target.files[0].type.includes('csv')
            // console.log(fileType);

            if (fileTypeIsCsv) {
                setFileMessage("File uploaded successfully.")
            }
            else {
                setFileMessage("Wrong file format. Try again!")
            }
        }
    }

    const handleArea = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setArea(event.target.value) //it's string so set 'area' as string
            // console.log(event.target.value);

        }
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!file) {
            alert("upload file first")
            return;
        }

        if (fileMessage == "Wrong file format. Try again!") {
            alert("upload a csv file first")
            return;
        }

        if (fileMessage == "File uploaded successfully.") {

            const formData = new FormData();
            formData.append('file', file)
            formData.append('area', area)

            // console.log('here');

            // console.log(formData); //this is null!
            // console.log(formData.getAll('file')); //shows the file metadata
            // console.log(process.env.NEXT_PUBLIC_API_URL);

            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                });

                setCsvData(response.data)
                // console.log(response.data);
                // console.log(csvData);


                // send to parent
                // to solve ///Cannot invoke an object which is possibly 'undefined'.
                if(sendDataToParent){
                    sendDataToParent(csvData)
                }

                //demo price
                setDemoPredictedPrice(99999)

            } catch (error: any) {
                setCsvData([])
                console.log("Error occured: ", error);
            }
        }
    }

    return (
        
            <div className="">

                <form onSubmit={handleSubmit}>
                    <div className="m-10 text-xl">
                        <div className='text-2xl font-semibold'>
                            Please upload your "csv" file:
                        </div>
                        <input type="file" className="mt-4" accept='.csv' name='file' required onChange={handleFile} />
                        {fileMessage ?
                            <p className='text-sm  mt-2 text-blue-500'>{fileMessage}</p>
                            : null}
                    </div>

                    {/* Insert area */}
                    <div className="m-10 text-xl">
                        <p>
                            To know the price, Enter your desired <span className="font-bold">area </span> :
                        </p>
                        <input type="number" value={area} name='area' required className="mt-4 p-1" onChange={handleArea} placeholder='Here...' />
                    </div>
                    <button type="submit" className='rounded-xl bg-blue-500 p-2 text-white ml-10'>Predict Price</button>
                </form>

                {/* Desired price */}

                <div className="m-10 text-xl">
                    <p className="font-bold font">
                        According to the 'csv' file Price is :

                        {/* output here */}
                        {/* {
                        predictedPrice && <span className="border-2 border-red-500 p-2 rounded-lg ml-2">{predictedPrice}</span>
                    } */}
                        
                        {
                        demoPredictedPrice && <span className="border-2 border-red-500 p-2 rounded-lg ml-2">{demoPredictedPrice}</span>
                    }
                    </p>

                </div>

            </div>

           
    )
}

export default PriceAreaSection