import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CustomSwiper =  ({slideItems,category}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        200: {  // mobile
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {  // small tablets
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: { // desktop
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: { // large screens
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {category === "menu"?( slideItems.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="menu-item">
            <img src={item.image} alt={item.name} className="dish-image" />
            <h3 className="dish-name">{item.name}</h3>
            <p className="dish-price">{item.price}</p>
          </div>
        </SwiperSlide>
      ))) : ((
        slideItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-item">
              <div className= "star-container">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <img src={item.image} alt={item.author} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{item.author}</h4>
                  <p className="author-timestamp">{item.timestamp}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      ))}
    </Swiper>
  );
};

export default CustomSwiper;