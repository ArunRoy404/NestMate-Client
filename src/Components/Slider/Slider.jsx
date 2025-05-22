// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
import { sliderData } from '../../utilities/SliderData';
import SliderBanner from './SliderBanner';


const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            effect={'fade'}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className="mySwiper"

        >
            {
                sliderData.map((data, index) => <SwiperSlide ><SliderBanner key={index} data={data} /></SwiperSlide>)
            }
        </Swiper>
    );
};

export default Slider;