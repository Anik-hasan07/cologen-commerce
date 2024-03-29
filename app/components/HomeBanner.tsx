import React from 'react'

type Props = {}

const HomeBanner = (props: Props) => {
    return (
        <div className='relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8'>
            <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
                <div>
                    <h1>ummer saleS</h1>
                    <p>Enjoy discount on selected items</p>
                    <p>Get 50% off</p>
                </div>
                <div></div>

            </div>


        </div>
    )
}

export default HomeBanner