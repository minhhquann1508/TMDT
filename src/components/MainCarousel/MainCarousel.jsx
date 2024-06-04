import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const listCarousel = [
    {
        id: 1,
        img: 'https://www.converse.vn/media/weltpixel/owlcarouselslider/images/d/e/dekstop_12__1.jpg',

    },
    {
        id: 2,
        img: 'https://www.converse.vn/media/weltpixel/owlcarouselslider/images/d/e/dekstop_10__1.jpg'
    },
    {
        id: 3,
        img: 'https://www.converse.vn/media/weltpixel/owlcarouselslider/images/d/e/dekstop_11__2.jpg'
    }
]

export default function MainCarousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3000
            }}
        >
            {listCarousel.map(item => (
                <SwiperSlide key={item.id}>
                    <img src={item.img} alt={item.img} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
