import React from 'react'
import FooterList from './FooterList'
import Link from 'next/link'
import Container from '../Container'

type Props = {}

const Footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'></div>
        <FooterList>
            <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
        </FooterList>
        </Container>
    </footer>
  )
}

export default Footer