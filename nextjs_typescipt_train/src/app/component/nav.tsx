import React from 'react'
import Link from 'next/link'
function Nav() {
  return (
      <div className='bg-sky-500'>
        <nav className='flex '>
            <div className='logo'>
                <h1>Next.JS</h1>
            </div>
            <div className='menu flex flex-row bg-black'>
                <li><Link href="/home" className='text-5xl'>Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/">WTF</Link></li>
            </div>
        </nav>
      </div>
  )
}

export default Nav
