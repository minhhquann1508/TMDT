import { Link } from 'react-router-dom';
import { icons } from '../../utils/icons';

const marketingList = [
    {
        title: 'Fast, Free Shipping',
        subtitle: 'Free Shipping on every order nationwide.',
        icons: [<icons.shippingIcon />]
    },
    {
        title: 'Worry-Free Returns',
        subtitle: 'Terms & conditions apply.',
        icons: [<icons.refundIcon />]
    },
    {
        title: 'Follow Us',
        subtitle: 'Keep up with the latest Converse news on our social channels.',
        icons: [<icons.fbIcon />, <icons.insIcon />]
    }
];

export default function Marketing() {
    return (
        <div className="border-y flex justify-around">
            {marketingList.map((item, key) => (
                <div key={item.title} className={`${key === 1 ? 'border-x' : ''} py-14 w-full`}>
                    <div className='flex justify-center gap-2 mb-5'>
                        {item.icons.map((icon, index) => (
                            <span className='text-[30px]' key={index}>{icon}</span>
                        ))}
                    </div>
                    <h3 className='text-center font-semibold mb-5'>{item.title}</h3>
                    <p className='text-xs text-center font-light mb-5'>{item.subtitle}</p>
                    <div className='flex justify-center'>
                        <Link className='underline font-semibold' to={'/'}>Learn more</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
