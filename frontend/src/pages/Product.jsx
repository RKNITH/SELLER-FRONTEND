import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
    const { productId } = useParams()
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState(null) // Set the initial value to `null`
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')

    // Fetch product data based on the productId
    const fetchProductData = () => {
        const product = products.find(item => item._id === productId)
        if (product) {
            setProductData(product)
            setImage(product.image[0]) // Set the first image as the selected image
        }
    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products]) // Added `products` dependency to ensure data is available

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* PRODUCT DATA */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* PRODUCT IMAGES */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img
                                src={item}
                                key={index}
                                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                onClick={() => setImage(item)} // Set image onClick
                                alt={`Product ${index}`}
                            />
                        ))}
                    </div>
                    {/* Display Selected Image */}
                    <div className='w-full sm:w-[80%]'>
                        <img src={image} className='w-full h-auto' alt='Selected Product' />
                    </div>
                </div>

                {/* PRODUCT INFO */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_icon} alt="" className="w-3.5" />
                        <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

                    {/* Size Selection */}
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1' >
                        <p>100% Originam products.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>

                </div>

            </div>
            {/*  DESCRIPTION AND REVIEW SECTIONS */}
            <div className='mt-20'>
                <div className='flex gap-3'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>An e-commerce website is an online platform that enables businesses to sell products and services directly to customers over the internet. It offers a convenient and efficient way for customers to browse through a wide variety of products, compare prices, read reviews, and make purchases from the comfort of their homes.</p>
                    <p>With the rise of digital technology, e-commerce has become an essential component of retail, transforming the way people shop and businesses operate. From clothing and electronics to groceries and digital products, an e-commerce platform provides an all-encompassing marketplace for diverse products.</p>
                    <p>Our e-commerce website is designed to provide a seamless shopping experience, with easy navigation, secure payment gateways, and reliable customer support. We strive to deliver high-quality products, competitive prices, and exceptional service to ensure complete customer satisfaction.</p>
                    <p>Whether you are looking for the latest fashion trends, high-tech gadgets, or unique handmade crafts, our website has something for everyone. Explore our extensive catalog, enjoy exclusive deals, and experience hassle-free shopping with just a few clicks.</p>
                    <p>Join us today and be part of the e-commerce revolution. Shop smart, save time, and get your favorite products delivered right to your doorstep.</p>

                </div>
            </div>

            {/* DISPLAY RELATED PRODUCTS */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : (
        <div className='opacity-0'>Loading...</div>
    )
}

export default Product
