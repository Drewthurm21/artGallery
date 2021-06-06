import React, { useEffect, useState } from 'react';
import './ParallaxHomepage.css'

const ParallaxHomepage = () => {

  // ----- PARALLAX SCROLL ----- //
  const [scrollOffset, setScrollOffset] = useState(0)
  const handleScroll = () => setScrollOffset(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ----- RENDER CONTENT -----
  const renderContent = () => (
    <>
      <div className='parallax-content-heading'>
        <h1 className='parallax-content-heading-text'>Jessa Lopez</h1>
        <h2 className='parallax-content-heading-caption'>Jessa Lopez' Amazing Art Gallery</h2>
      </div>
      <div className='parallax-content-container'>
        <div>
          <p>
            <b>Gallery</b>
          </p>
        </div>
        <div>
          <p>
            <b>Blog</b>
          </p>
        </div>
        <div>
          <p>
            <b>Contact</b>
          </p>
        </div>
      </div>
    </>
  )

  return (
    <section className="parallax">
      <div
        className="parallax-background"
        style={{ transform: `translateY(-${scrollOffset * 0.5}px)` }}
      />
      <div
        className="parallax-background-triangles"
        style={{ transform: `translateY(${scrollOffset * 0.6}px)` }}
      />
      <div className="parallax-content">{renderContent()}</div>
    </section>
  );
}

export default ParallaxHomepage;