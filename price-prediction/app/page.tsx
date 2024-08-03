'use client'
import Image from "next/image";
import Link from "next/link";
import DemoCSV from "./components/DemoCSV";
import PriceAreaSection from "./components/PriceAreaSection";
import Footer from "./components/Footer";
import PPWithCsv from "./components/PPWithCsv";
import PPWithoutCsv from "./components/PPWithoutCsv.";

export default function Home() {


  
  return (
    <div>
      <PPWithoutCsv/>
    </div>
  );
}
