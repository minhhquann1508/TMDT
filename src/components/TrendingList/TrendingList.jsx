const trendingList = [
    {
        img: 'https://www.converse.vn/media/wysiwyg/Chuck_70_2.jpg',
        href: 'chuck70'
    },
    {
        img: 'https://www.converse.vn/media/wysiwyg/Classic_Chuck_2.jpg',
        href: 'classic-chuck'
    },
    {
        img: 'https://www.converse.vn/media/wysiwyg/elevation_2.jpg',
        href: 'elevation'
    },
    {
        img: 'https://www.converse.vn/media/wysiwyg/Comfort_1.jpg',
        href: 'comfort'
    }
]

export default function TrendingList() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {trendingList.map((item) => (
                <div className='cursor-pointer relative group shadow-md' key={item.href}>
                    <div
                        className='hidden absolute left-[-2.5%] top-[-2.5%]
                         bg-black opacity-15 w-[105%] h-[105%]
                         group-hover:block duration-200'
                    >
                    </div>
                    <div>
                        <img src={item.img} alt={item.href} />
                    </div>
                </div>
            ))}
        </div>
    )
}
