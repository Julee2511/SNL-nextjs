import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <section className="scroll-mt-24 bg-section dark:bg-darklight py-20 border-none" id='testimonials'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div>
                    <div className=''>
                    <p className="font-large md:text-40 text- font-bold text-midnight_text dark:text-white text-center mx-auto">
                        Our Awards
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-4 border-b">
                        </div>
                        <div className="flex justify-between mt-5">
                    <Image
                        src="/images/testimonial/sofa.svg"
                        alt="sofa"
                        width={150}
                        height={0}
                        quality={100}
                        className="w_f !w-30 !h-30"
                    />
                    <p className="mt-8">SOFA</p>
                    <p className="mt-8">25 Oct, 2024</p>
                    <p className="mt-8">Awwwards</p>
                    <Image
                        src="/images/testimonial/bitmap_1.svg"
                        alt="bitmap"
                        width={150}
                        height={0}
                        quality={100}
                        className="w_f !w-10 !h-10"
                    />
                    </div>
                    <div className="flex items-center justify-between p-4 border-b">
                        </div>
                        <div className="flex justify-between mt-5">
                    <Image
                        src="/images/testimonial/sofa.svg"
                        alt="sofa"
                        width={150}
                        height={0}
                        quality={100}
                        className="w_f !w-30 !h-30"
                    />
                    <p className="mt-8">SOFA</p>
                    <p className="mt-8">25 Oct, 2024</p>
                    <p className="mt-8">Awwwards</p>
                    <Image
                        src="/images/testimonial/bitmap_2.svg"
                        alt="bitmap"
                        width={150}
                        height={0}
                        quality={100}
                        className="w_f !w-10 !h-10"
                    />
                    </div>
                    <div className="flex items-center justify-between p-4 border-b">
                        </div>
                        <div className="flex justify-between mt-5">
                    <Image
                        src="/images/testimonial/sofa.svg"
                        alt="sofa"
                        width={150}
                        height={0}
                        quality={100}
                        className="w_f !w-30 !h-30"
                    />
                    <p className="mt-8">SOFA</p>
                    <p className="mt-8">25 Oct, 2024</p>
                    <p className="mt-8">Awwwards</p>
                    <Image
                        src="/images/testimonial/bitmap_3.svg"
                        alt="bitmap"
                        width={150}
                        height={0}
                        quality={100}
                        className="w_f !w-10 !h-10"
                    />
                    </div>
                    <div className="flex items-center justify-between p-4 border-b">
                    </div>
                    <div className=""></div>
                    <div className="text-center mt-20">
                        <p className='text-16 text-gray dark:text-white dark:text-opacity-50'>Want more awards?Explore Now</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial