import Image from 'next/image'
import { ArrowRightCircle } from 'lucide-react'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='py-12'>
                <h1 className='text-5xl font-semibold leading-[3.8rem]'>Brewing<br />Moments,<br /> Pouring&nbsp;
                    <span className='text-primary'>
                        Joy
                    </span>.
                </h1>
                <p className='my-4 mb-6 text-gray-500'>Where Every Sip Meets Delight <br /> and Every Bite Tells a Story</p>
                <div className='flex items-center gap-4 text-sm'>
                    <button className='bg-primary px-4 py-2 rounded-full text-white flex gap-2 uppercase items-center'>
                        Order Now
                        <ArrowRightCircle className='' />
                    </button>
                    <button className='px-4 py-2 rounded-full flex gap-2 text-gray-600 font-semibold items-center'>
                        Chat with AI
                        <ArrowRightCircle className='' />
                    </button>
                </div>
            </div>
            <div className='relative mt-2 ml-20'>
                <Image src={`/images/coffeehero1.png`} objectFit='contain' layout='fill' alt='hero-image' />
            </div>
        </section>
    )
}

export default Hero