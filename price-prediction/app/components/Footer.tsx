'use client'

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <p className=" m-5">Made by 
      <Link className="text-red-600 pl-1 font-bold hover:underline hover:text-green-500 cursor-pointer" 
      href='https://www.linkedin.com/in/maksud7/'
      >@Maksudul Islam
      </Link>
      </p>
    </div>
  )
}

export default Footer