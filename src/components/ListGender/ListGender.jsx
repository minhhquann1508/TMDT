const listGender = [
    {
        id: 1,
        img: 'https://www.converse.vn/media/wysiwyg/MEN_copy.jpg'
    },
    {
        id: 2,
        img: 'https://www.converse.vn/media/wysiwyg/WOMEN_copy.jpg'
    },
    {
        id: 3,
        img: 'https://www.converse.vn/media/wysiwyg/UNISEX_2.jpg'
    }
];

export default function ListGender() {
    return (
        <div className="flex gap-5 px-20">
            {listGender.map(item => (
                <div key={item.id} className="overflow-hidden shadow-md cursor-pointer">
                    <img src={item.img} alt={item.img} />
                </div>
            ))}
        </div>
    )
}
