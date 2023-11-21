
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={"https://icms-image.slatic.net/images/ims-web/aafe1ae4-b69f-4696-b3b1-da8faeefcf54.jpeg_1200x1200.jpg"} alt="Slide1"/></SwiperSlide>
        <SwiperSlide><img src={"https://icms-image.slatic.net/images/ims-web/aafe1ae4-b69f-4696-b3b1-da8faeefcf54.jpeg_1200x1200.jpg"} alt="Slide2"/></SwiperSlide>
        <SwiperSlide><img src={"https://icms-image.slatic.net/images/ims-web/aafe1ae4-b69f-4696-b3b1-da8faeefcf54.jpeg_1200x1200.jpg"} alt="Slide3"/></SwiperSlide>
       
      </Swiper>
  )
}

export default Carousel