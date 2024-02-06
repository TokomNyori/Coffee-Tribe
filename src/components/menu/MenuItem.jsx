import Image from 'next/image'

const MenuItem = () => {
    return (
        <div
            className='bg-gray-200 p-4 pb-6 rounded-xl text-center flex flex-col items-center hover:bg-white hover:shadow-lg
            transition-all duration-150'
        >
            <div className=''>
                <Image src={`/foods/pizza1.png`} width={100} height={100} alt='pizza' className='' />
            </div>
            <h4 className='font-semibold my-3 text-xl'>Pizza Margherita</h4>
            <p className='text-gray-500 text-sm mb-4'>
                With a tangy tomato sauce, melted mozzarella,
                fresh basil, and a drizzle of extra virgin olive oil on a crispy crust.
            </p>
            <button className='bg-primary rounded-full text-white px-6 py-2'>
                Order Rs. 200
            </button>
        </div>
    )
}

export default MenuItem