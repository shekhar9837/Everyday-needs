import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col   px-4 md:mt-20 md:mb-20 '>
      
      <div className='flex flex-col '>
        <div className='md:px-32 px-2'>
        <h1 className='text-[1.2rem] pt-4'>Visit Us:</h1>
        <h1 className='text-[1.2rem] pb-4'>Ponsonby Store</h1>
        <h5 className='text-[0.8rem] inline border-b-[1px] border-black'>Shop all</h5>
        </div>

        <div className='flex items-start justify-center gap-20  px-4 '>
            <div className='md:w-1/3 md:py-0 py-8'>
            <img src="/img/AboutUsFront.webp" alt="" />
            <h5 className='text-[0.8rem] pt-2 '>1. Our Ponsonby store</h5>
            </div>
            <div className='md:w-1/5 md:flex flex-col hidden '>
                <img src="/img/gift.webp" className='object-cover'  alt="" />
                <h5 className='text-[0.8rem] pt-2'>2. Everyday Needs Gift Wrapping</h5>

                <div className='mt-20'>
                    <p className='text-[0.8rem] leading-tight'>
                    Everyday Needs is a store for people who want to make informed decisions for their way of living. Carefully sourced and personally curated, Everyday Needs offers products that please the eye and are made for everyday use, with a thoughtfulness and quality that will stand the test of time. Some pieces are truly unique and not to be found elsewhere, whereas other products are tried and true classic items that we cannot live without. Our selection is ever-changing.
                    </p>
                    <p className='mt-10 text-[0.8rem] border-b-[1px] border-black inline-block'>Shop made by Everyday Needs</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
