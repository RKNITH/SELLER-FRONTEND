import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../components/NewsLetterbox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'About'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='img' />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>
                        Welcome to <b>Forever</b>, your one-stop destination for premium quality products. Our mission is to provide an exceptional online shopping experience by offering a carefully curated collection of items that combine style, comfort, and durability.
                    </p>
                    <p>
                        At <b>Forever</b>, we believe that shopping should be more than just a transaction. It should be an experience that resonates with quality and trust. We source our products from trusted manufacturers, ensuring that every item you purchase meets the highest standards of craftsmanship and design.
                    </p>
                    <p>
                        Our team is passionate about delivering excellence. We continuously strive to expand our catalog to cater to the ever-evolving preferences of our customers. Whether you're looking for the latest fashion trends, home essentials, or exclusive accessories, <b>Forever</b> has something for everyone.
                    </p>
                    <p>
                        Customer satisfaction is at the heart of everything we do. We are dedicated to providing seamless service and support, ensuring that your shopping experience is as enjoyable as possible. Thank you for choosing <b>Forever</b>, where every purchase is a step towards a better, more stylish lifestyle. Happy shopping!
                    </p>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className='text-4xl py-4'>
                <Title text1={'OUR'} text2={'MISSION'} />
            </div>
            <div className='flex flex-col justify-center items-center text-gray-600'>
                <p className='max-w-3xl text-center'>
                    Our mission at <b>Forever</b> is to revolutionize the online shopping experience by offering an unmatched blend of quality, affordability, and convenience. We aim to bring you the best products from around the world, handpicked for their craftsmanship, style, and utility. By prioritizing customer satisfaction and constantly innovating, we aspire to become a global leader in the e-commerce space, offering products that cater to your lifestyle while ensuring a seamless, delightful shopping journey.
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div className='text-4xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb:20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p className='text-gray-600'>
                        Every product at <b>Forever</b> undergoes strict quality checks to ensure that it meets the highest standards of craftsmanship. From fashion to home essentials, we guarantee that you're investing in long-lasting and reliable products.
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience</b>
                    <p className='text-gray-600'>
                        We bring the store to your fingertips, offering an easy-to-navigate platform that makes finding and purchasing products effortless. With fast shipping and flexible return policies, we make online shopping convenient and hassle-free.
                    </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service</b>
                    <p className='text-gray-600'>
                        At <b>Forever</b>, we value our customers above all else. Our dedicated support team is always ready to assist you with any inquiries, ensuring that your shopping experience is smooth from start to finish.
                    </p>
                </div>
            </div>

            <div className='mt-5'>
                <NewsLetterbox />
            </div>
        </div>
    )
}

export default About
