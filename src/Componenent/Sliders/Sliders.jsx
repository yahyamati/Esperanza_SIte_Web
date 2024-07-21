import React, { useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the close icon
import './Sliders.css';
import { data } from '../../assets/assets'; // Adjust the path according to your project structure
import { HTMLFlipBook } from './HTMLFlipBook'; // Adjust the path according to your project structure

const Sliders = () => {
  const [showBook, setShowBook] = useState(false);
  const [selectedBookContent, setSelectedBookContent] = useState([]); // Initialize as empty array

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    arrows: false, // Disable previous and next arrows
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
        },
      },
    ],
  };

  const handleCardClick = (bookContent) => {
    setSelectedBookContent(bookContent || []); // Ensure bookContent is always an array
    setShowBook(true);
  };

  return (
    <div>
      <div className="slider-container">
        <h2>Our Events</h2>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(item.bookContent)}>
              <img src={item.img} alt={item.name} />
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {showBook && (
        <div className="book-container">
          <button className="close-button" onClick={() => setShowBook(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <HTMLFlipBook
            className="flip-book"
            width={300}
            height={500}
            size="stretch"
            minWidth={200}
            maxWidth={600}
            minHeight={400}
            maxHeight={800}
            maxShadowOpacity={0.5}
          >
            {selectedBookContent.length > 0 &&
              selectedBookContent.map((page, idx) => (
                <div key={idx} className="page">
                    <h3>{page.title}</h3>
                  <img src={page.img} alt={`Page ${idx + 1}`} style={{ width: '100%', height: 'auto' }} />
                  <p>{page.description}</p>
                  <p className="page-number">Page {idx + 1}</p> {/* Display page number at the bottom */}
                </div>
              ))}
          </HTMLFlipBook>
        </div>
      )}
    </div>
  );
};

export default Sliders;
