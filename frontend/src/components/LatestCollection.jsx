import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx'
import ProductItem from './ProductItem.jsx'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProduct, setLatestProduct] = useState([])

    useEffect(() => {
        setLatestProduct(products.slice(0, 10))
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm ms:text-base text-gray-600'>
                    Discover our newest arrivals, carefully curated to match the latest trends.
                    Shop now and elevate your style with these handpicked selections.
                </p>
            </div>

            {/* rendering products */}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProduct.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection
