import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TopSlider = () => {
    const sliderData = [
        {
          id: 1,
          title: 'Learn the Art of Drawing',
          description: 'Join our drawing school and unleash your creativity.',
          image: 'https://previews.123rf.com/images/iimages/iimages1212/iimages121200475/17024750-illustration-of-kids-and-a-school-in-a-beautiful-nature.jpg',
        },
        {
          id: 2,
          title: 'Master Different Techniques',
          description: 'Explore various drawing techniques and improve your skills.',
          image: 'https://www.superprof.co.in/blog/wp-content/uploads/2018/11/image3-5.jpg',
        },
        {
          id: 3,
          title: 'Expert Guidance and Feedback',
          description: 'Receive expert guidance and valuable feedback on your artwork.',
          image: 'https://mayahum.files.wordpress.com/2016/07/img_20160131_145031955.jpg',
        },
      ];
    
      return (
        <Carousel >
          {sliderData.map((slide) => (
            <div key={slide.id} className='w-full' style={{maxHeight: "550px", width: "100%"}}>
              <img src={slide.image} alt={slide.title} />
              <div className="legend">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      );
    };

export default TopSlider;