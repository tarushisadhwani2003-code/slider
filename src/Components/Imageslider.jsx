import React, { useEffect, useState } from 'react'
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img4.avif'

const images = [img1, img2, img3, img4]

const Imageslider = () => {
  const [content, setContent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setContent((previous) => (previous + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const showPrevious = () => {
    setContent((previous) => (previous - 1 + images.length) % images.length)
  }

  const showNext = () => {
    setContent((previous) => (previous + 1) % images.length)
  }

  return (
    <section className="image-slider" aria-label="Image slider">
      <style>{`
        .image-slider {
          max-width: 900px;
          margin: 20px auto;
        }

        .image-slider__frame {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          background: #f3f4f6;
        }

        .image-slider__image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: contrast(1.04) saturate(1.06);
        }

        .image-slider__arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 8px 12px;
          border: none;
          background: white;
          cursor: pointer;
        }

        .image-slider__arrow--previous { left: 10px; }
        .image-slider__arrow--next { right: 10px; }

        .image-slider__dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
        }

        .image-slider__dot {
          width: 12px;
          height: 12px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #aaa;
          cursor: pointer;
        }

        .image-slider__dot[aria-current="true"] {
          background: #333;
        }
      `}</style>

      <div className="image-slider__frame">
        <img
          key={content}
          className="image-slider__image"
          src={images[content]}
          alt={`Slider image ${content + 1}`}
        />
        <button
          className="image-slider__arrow image-slider__arrow--previous"
          type="button"
          aria-label="Previous image"
          onClick={showPrevious}
        >
          ‹
        </button>
        <button
          className="image-slider__arrow image-slider__arrow--next"
          type="button"
          aria-label="Next image"
          onClick={showNext}
        >
          ›
        </button>
      </div>

      <div className="image-slider__dots" aria-label="Choose an image">
        {images.map((_, index) => (
          <button
            key={index}
            className="image-slider__dot"
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={content === index}
            onClick={() => setContent(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Imageslider
