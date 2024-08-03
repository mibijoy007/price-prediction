'use client'
import Image from "next/image";
import Link from "next/link";
import DemoCSV from "./components/DemoCSV";
import PriceAreaSection from "./components/PriceAreaSection";
import Footer from "./components/Footer";

export default function Home() {


  
  return (
    <div>
      <div className="text-5xl text-center font-bold mt-4">
          Hi! Welcome to price prediction app
        </div>
    
      <PriceAreaSection/>

    <Footer/>
    </div>
  );
}
