import React, { PureComponent } from 'react';
import Swiper from 'react-id-swiper';
import ButtonStart from './buttonLeadsStart';

class HeroSliderThree extends PureComponent {
  render() {
    const params = {
      // slidesPerView : 5,
      //   loop:true,
      // spaceBetween: 30,
      //    centeredSlides: true,
      watchSlidesVisibility: false,
      //     slidesPerView : 'auto',
      effect: 'fade',
      autoplay: {
        delay: 5000,
        // disableOnInteraction: false
      },
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    const data = [
      {
        bgImg: 'slider-main.jpg',
        sliderTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        sliderSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        btnLink: '#',
      },
    ];

    const DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div className="hero-slider__single-item">
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content m-auto text-center">
                      <h1 className="hero-slider__title">{val.sliderTitle}</h1>
                      <p className="hero-slider__text">{val.sliderSubtitle}</p>
                      <div>
                        <ButtonStart buttonStyle="hero-slider__btn ht-btn--round" buttonTitle="COMMENCER" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*= ===================  hero slider area ==================== */}
        <div className="hero-alider-area">
          <Swiper {...params}>{DataList}</Swiper>
        </div>
        {/*= ===================  End of hero slider area  ==================== */}
      </div>
    );
  }
}

export default HeroSliderThree;
