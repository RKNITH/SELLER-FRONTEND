import React from 'react'

const NewsLetterbox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // Add your subscription logic here
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Join our newsletter to receive exclusive deals, updates on new arrivals, and special discounts. Stay connected and save!
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-800'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterbox
