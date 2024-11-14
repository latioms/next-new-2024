import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className='h-40 top-0 text-md font-light p-4'>
        <nav className='flex flex-row justify-between'>
            <Image src="/next.svg" alt='Mon super Logo' width={100} height={80}/>

            <div title='links' className='flex flex-row items-center gap-x-4'>
                <Link className='hover:underline' href='/'>
                    Accueil
                </Link>
                <Link className='hover:underline' href='/contact'>
                    Contact
                </Link>
            </div>

            <div title='CTA' className='flex gap-x-3'>
                <button className='p-2 bg-black text-white border-2'>Commencez maintenant</button>
            </div>

        </nav>
    </header>
  )
}

export default Header