// Images
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import servIcon1 from '../../../../assets/images/services/service1.png';
import servIcon2 from '../../../../assets/images/services/service2.png';

// Styles
import './portfolio-item.css'


// Images
import item1 from '../../../../assets/images/portfolio/items/item_01_3.jpg';
import item2 from '../../../../assets/images/portfolio/items/item_02.jpg';
import item3 from '../../../../assets/images/portfolio/items/item_03.jpg';

// -------------------

function PortfolioItem4() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-40">
            <h2 className="entry-title section-title">
              Slick Slicezz
            </h2>

            <p className="section-info">
              Two ghostly white figures in coveralls and helmets are softly
              dancing.
            </p>

            <p>
              Cras pretium metus pulvinar ultricies auctor. In varius purus
              blandit sem mollis tristique. Curabitur sed lorem vel ligula
              pulvinar porttitor. Proin sit amet mauris eleifend amet,
              ullamcorper lacus. Vangelis rich in heavy atoms descended from
              astronomers dream of the mind’s cras pretium metus pulvinar
              ultricies auctor in varius purus blandit.
            </p>

            <p>
              <a className="button">View Project</a>
            </p>
          </div>
          <div className="one-half width-55 last">
            <div className="image-slider-wrapper relative block-right">
              <Swiper
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination]}
                className="portfolio-slider">
                <SwiperSlide>
                  <img src={item1} alt="portfolio item 1" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem4;
