import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { Redressed } from 'next/font/google'

const redressed = Redressed({subsets:["latin"],weight:["400"]})


type Props = {}

const NavBar = (props: Props) => {
    return (
        <div className='sticky top-0 w-full bg-slate-200 z-30 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex items-center justify-between gap-3 md:gap-0'>
                        <Link href="/" className={`${redressed.className} font-bold text-2xl`}>Cologen</Link>
                        <div className='hidden md:block'>Search</div>
                        <div className='flex items-center gap-8 md:gap-12'>
                            <div>cartcount</div>
                            <div>usercount</div>

                        </div>
                    </div>

                </Container>

            </div>

        </div>
    )
}

export default NavBar