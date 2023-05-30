import React from 'react'
import Slider from "react-slick";

import musteri01 from '../../../assets/images/musteri_01.webp'
import musteri02 from '../../../assets/images/musteri_04.jpg'
import musteri03 from '../../../assets/images/musteri_05.jpg'

import "../../../styles/slider.css";

const MusteriSlider = () => {
    const settings= {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1

    }
    return (
        <Slider {...settings}>
          <div>
            <p className="yorum_text">
            "Çok uzun zamandır çocuklarım için organik ürünler arıyordum ve bu siteyi buldum. Ürünlerin lezzeti inanılmaz, gerçekten doğal tadı alıyorum. Artık başka yerden alışveriş yapmam!"
            </p>
            <div className=" slider__content d-flex align-items-center gap-3 ">
              <img src={musteri01} alt="karakter" className=" rounded" />
              <h6>Pelin Akil</h6>
            </div>
          </div>
          <div>
            <p className="yorum_text">
            "Bu site sayesinde organik ürünleri keşfettim ve hayatım değişti! Tüm alışverişlerimi buradan yapıyorum, ürünler taze ve doğal. Kesinlikle tavsiye ederim!"
            </p>
            <div className="slider__content d-flex align-items-center gap-3 ">
              <img src={musteri02} alt="karakter" className=" rounded" />
              <h6>Seçkin Özdemir</h6>
            </div>
          </div>
          <div>
            <p className="yorum_text">
            "Bu siteyi arkadaşlarıma da öneriyorum çünkü gerçekten güvenilir bir platform. Hem sağlıklı hem de güvenli bir şekilde alışveriş yapmak isteyen herkese tavsiye ederim."
            </p>
            <div className="slider__content d-flex align-items-center gap-3 ">
              <img src={musteri03} alt="karakter" className=" rounded" />
              <h6>Zehra Sarı</h6>
            </div>
          </div>
        </Slider>
      );
    };
    
    export default MusteriSlider;