import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../assets/images/portfolio/items/item_02.jpg';
import item2 from '../../../../assets/images/portfolio/items/item_02.jpg';
import item3 from '../../../../assets/images/portfolio/items/item_03.jpg';

// Styles
import './portfolio-item.css';

// -------------------

function PortfolioItem2() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-40">
            <h2 className="entry-title section-title">
              Online Movies/Tv Show Library
            </h2>

            <p className="section-info">
              boujee* IMDB 2.0 - sarcasm*
            </p>

            <p>
              <div> Technologies Used: </div>
              SCSS · TypeScript · HTML5 · Github · AngularJS
            </p>

            <p>
            <a href="https://github.com/femisowems/movies-tvs-library/" target="_blank" className=" button">View Github</a>
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

export default PortfolioItem2;
