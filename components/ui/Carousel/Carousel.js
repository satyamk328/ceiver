'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

export default function Carousel({
  slides = [],
  autoPlay = true,
  interval = 5500,
  showDots = true,
  showArrows = true,
  variant = 'slide',
}) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent((idx + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  // Auto-advance with progress tracking
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    startTimeRef.current = Date.now();
    setProgress(0);

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / interval) * 100, 100);
      setProgress(pct);
      if (elapsed >= interval) {
        setCurrent((c) => (c + 1) % slides.length);
        startTimeRef.current = Date.now();
      }
      progressRef.current = requestAnimationFrame(tick);
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [autoPlay, current, interval, slides.length]);

  if (!slides.length) return null;

  return (
    <div className={`carousel${variant === 'fade' ? ' carousel--fade' : ''}`}>
      {variant === 'fade' ? (
        <div className="carousel__track" style={{ position: 'relative' }}>
          {slides.map((slide, i) => (
            <SlideItem key={i} slide={slide} active={i === current} fade index={i} />
          ))}
        </div>
      ) : (
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <SlideItem key={i} slide={slide} active={i === current} index={i} />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {autoPlay && slides.length > 1 && (
        <div className="carousel__progress">
          <div className="carousel__progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}

      {showArrows && slides.length > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--prev"
            onClick={() => goTo(current - 1)}
            aria-label="Previous slide"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="carousel__arrow carousel__arrow--next"
            onClick={() => goTo(current + 1)}
            aria-label="Next slide"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && slides.length > 1 && (
        <div className="carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${i === current ? ' carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      {slides.length > 1 && (
        <div className="carousel__counter">
          <span>{String(current + 1).padStart(2, '0')}</span> / {String(slides.length).padStart(2, '0')}
        </div>
      )}
    </div>
  );
}

function SlideItem({ slide, active, fade, index }) {
  const bgStyle = slide.image
    ? { backgroundImage: `url(${slide.image})` }
    : {};

  return (
    <div className={`carousel__slide${fade && active ? ' carousel__slide--active' : ''}`}>
      <div className="carousel__blob carousel__blob--1" />
      <div className="carousel__blob carousel__blob--2" />
      <div className="carousel__slide-bg" style={bgStyle} />
      <div className="carousel__slide-overlay" />
      <div className="carousel__slide-grid" />

      <div className="carousel__slide-content">
        {slide.tag && (
          <div className="carousel__slide-tag animate-fade-up">{slide.tag}</div>
        )}
        <h1
          className="carousel__slide-title animate-fade-up delay-100"
          dangerouslySetInnerHTML={{ __html: slide.title }}
        />
        {slide.description && (
          <p className="carousel__slide-description animate-fade-up delay-200">
            {slide.description}
          </p>
        )}
        {(slide.cta || slide.ctaSecondary) && (
          <div className="carousel__slide-actions animate-fade-up delay-300">
            {slide.cta && (
              <Link href={slide.cta.href} className="btn-primary">
                {slide.cta.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            {slide.ctaSecondary && (
              <Link href={slide.ctaSecondary.href} className="btn-ghost-white">
                {slide.ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
