"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const Menu = () => {
  const [open,setOpen]=useState(false)
  console.log(open);
  return (
    <div>
      {!open ? (<Image src="/open.png" alt='' width={20} height={20}  onClick={()=>setOpen(true)}/>) 
      : (
      <Image src="/close.png" alt='' width={20} height={20}  onClick={()=>setOpen(false)}/>)}
    </div>
  )
}

export default Menu
