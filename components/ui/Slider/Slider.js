'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Slider({
  items = [],
  autoPlay = true,
  interval = 4000,
  showDots = true,
  showArrows = true,
  className = '',
}) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  }, [items.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, items.length]);

  if (!items.length) return null;

  return (
    <div className={`slider ${className}`}>
      {/* Track */}
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="slider__slide">
            {item}
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            className="slider__arrow slider__arrow--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="slider__arrow slider__arrow--next"
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      {/* Dot indicators */}
      {showDots && items.length > 1 && (
        <div className="slider__dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`slider__dot${i === current ? ' slider__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
