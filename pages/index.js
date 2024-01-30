import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
  const images = [
    '/images/slider1.jpeg',
    '/images/slider1.jpeg',
    '/images/slider1.jpeg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
        <ul style={{ display: 'inline-block' }}>{dots}</ul>
      </div>
    ),
  };

  const sliderStyle = {
    width: '65%',
    margin: '0 auto',
    position: 'relative'
  };

  return (
    <div>
      <Slider {...sliderSettings} style={sliderStyle}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomePage;
