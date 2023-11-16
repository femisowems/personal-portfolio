// Images
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Styles
import './portfolio-item.css';

// Images
import item1 from '../../../../assets/images/portfolio/items/item_01.jpg';

// -------------------

function PortfolioItem3() {
  return (
    <div className="portfolio-item-wrapper center-relative">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-40">
            <h2 className="entry-title section-title">
              starterdev.io
            </h2>

            <p className="section-info">
              Turning ideas into reality
            </p>

            <p>
              A website design & development agency, withe the goal of turing your dream website ideas into reality!
            </p>

            <p>
            <a href="https://starterdev.io/" target="_blank" className="button">View Website</a>
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

export default PortfolioItem3;
