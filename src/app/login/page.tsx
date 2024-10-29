import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* BOX  */}
      <div className='h-full  shadow-2xl rounded-md flex flex-col md:flex-row'>
         {/* IMAGE CONTAINER */}
         <div className=' relative h-1/3 w-full '>
            <Image src="/loginBg.png" alt='' fill className='object-cover'/>
         </div>
         {/* FORM CONTAINER */}
         <div className='p-10 flex flex-col gap-8'>
          <h1 className='font-bold text-xl'>Welcome</h1>
          <p>Log into your account or create a new one usingg social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src="/google.png" alt='' width={20} height={20} className=' object-contain'/>
            <span>Sign with Google</span>
            
           </button>
          <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
            <Image src="/facebook.png" alt='' width={20} height={20} className=' object-contain'/>
            <span>Sign with Facebook</span>
            
           </button>
           <p className='text-sm'>
            Have a problem?<Link href="/" className=' underline'>Contact us</Link>
            </p>

         </div>
      </div>
    </div>
  )
}

export default LoginPage
