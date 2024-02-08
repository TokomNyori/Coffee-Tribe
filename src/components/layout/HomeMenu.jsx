import Image from 'next/image'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
    return (
        <section className=''>
            <div className='absolute w-full left-0 right-0 justify-start'>
                <div className='absolute left-0 -z-10 -top-20'>
                    <Image src={`/images/sallad1.png`} width={100} height={150} alt='salad' />
                </div>
                <div className='absolute right-0 -top-32 -z-10'>
                    <Image className='' src={`/images/sallad3.png`} width={100} height={150} alt='salad' />
                </div>
            </div>
            <div className="text-center mt-3">
                <SectionHeaders header={`Menu`} subHeader={`Check out`} />
                <div className='grid grid-cols-3 gap-4 mt-8'>
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </div>
        </section>
    )
}

export default HomeMenu