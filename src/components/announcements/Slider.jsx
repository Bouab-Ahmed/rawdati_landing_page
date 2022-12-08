import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SliderItem from './SliderItem';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper';

const Announcements = () => {
  const { language, data } = useLanguage();
  console.log(data?.announcements?.slides);
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      className='mySwiper'
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      dir='ltr'
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.announcements?.slides
        ? data?.announcements?.slides.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <SliderItem item={item} />
              </SwiperSlide>
            );
          })
        : null}
    </Swiper>
  );
};

export default Announcements;
