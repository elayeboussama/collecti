import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = ({ images }) => {
  return (
    <div className=''>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        modules={[Navigation, Pagination]}
      >
        {images.map((image, idx) => (<SwiperSlide key={idx}><div><img className='object-cover w-full h-full max-h-96' src={image} alt="" /></div></SwiperSlide>))}

      </Swiper>
    </div>
  )
}

export default ImageSlider