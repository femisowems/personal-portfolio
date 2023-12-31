// Images
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Styles
import './portfolio-item.css'


// Images
import item1 from '../../../../assets/images/portfolio/items/item_03.jpg';

// -------------------

function PortfolioItem4() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-40">
            <h2 className="entry-title section-title">
              Femi S. Personal Portfolio
            </h2>

            <p className="section-info">
              ReBranded my personal website portfolio using React.js
            </p>

            <p>
            <div> Technologies Used: </div>
              React · TypeScript · HTML5 · Github · CSS · Vercel 
            </p>

            <p>
            <a href="https://github.com/femisowems/personal-portfolio" target="_blank" className="button">View Github</a>
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
