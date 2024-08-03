'use client'

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent text-white p-4 mt-auto mb-2 border-t-[1px] border-gray-600">
      <div className=" mx-auto text-center">
        Made by
        
        <Link className="text-red-600 pl-1 font-bold hover:underline hover:text-green-500 cursor-pointer"
          href='https://www.linkedin.com/in/maksud7/'
        >@Maksudul Islam
        </Link>
      </div>
    </footer>
  )
}

export default Footer