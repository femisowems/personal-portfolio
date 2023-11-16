// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../assets/images/portfolio/items/item_01_3.jpg';
import item2 from '../../../../assets/images/portfolio/items/item_02.jpg';
import item3 from '../../../../assets/images/portfolio/items/item_03.jpg';

// Styles
import './portfolio-item.css';

// -------------------

function PortfolioItem1() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-40">
            <h2 className="entry-title section-title">
              Slick Slicezz
            </h2>

            <p className="section-info">
            Built a website for a local pizza store as a personal project to work on different skillset.
            </p>

            <p>
              <div> Technologies Used: </div>
              GraphQL · Headless CMS · React.js · REST API · Reusable Component · SCSS · JavaScript
            </p>

            <p>
              <a href="https://starterdev-pizzas-take2.vercel.app/" target="_blank" className="button">View Project</a>

              <a href="https://starterdev-pizzas-take2.vercel.app/" target="_blank" className="m-left-10 button">Github</a>
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

export default PortfolioItem1;
