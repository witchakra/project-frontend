import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import styles from './banner.module.css'

export default function ProductCard( {carName,imgSrc} : {carName :string,imgSrc:string}) {

    return (
        <InteractiveCard contentName = {carName} >
            <div className='w-full h-full relative rounded-lg z-10'>
                <Image src ={imgSrc}
                alt = 'Product Picture'
                fill={true}
                className='object-cover rounded-lg'/>
                <div className='p-[30px] z-50'> {carName}</div>
            </div>
        </InteractiveCard>
    );
}