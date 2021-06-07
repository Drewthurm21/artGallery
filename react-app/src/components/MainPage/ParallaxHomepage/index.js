import React, { useEffect, useState } from 'react';
import './ParallaxHomepage.css'

const ParallaxHomepage = () => {

  // ----- PARALLAX SCROLL ----- //
  const [scrollOffset, setScrollOffset] = useState(0)
  const handleScroll = () => setScrollOffset(window.pageYOffset)
  const scrollDown = () => window.scroll(0, 1280)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    setTimeout(() => {
      scrollDown()
    }, 1000);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ----- MODAL LOGIC ----- //
  const [openGallery, setOpenGallery] = useState(false)
  const [openBlog, setOpenBlog] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  const showGallery = () => {
    if (openGallery) {
      setOpenGallery(false)
    } else {
      setOpenBlog(false)
      setOpenContact(false)
      setOpenGallery(true)
    }
  }

  const showBlog = () => {
    if (openBlog) {
      setOpenBlog(false)
    } else {
      setOpenGallery(false)
      setOpenContact(false)
      setOpenBlog(true)
    }
  }

  const showContact = () => {
    if (openContact) {
      setOpenContact(false)
    } else {
      setOpenGallery(false)
      setOpenBlog(false)
      setOpenContact(true)
    }
  }

  // ----- RENDER CONTENT ----- //
  const renderContent = () => (
    <>
      <div
        className='parallax-content-heading'
        style={{ transform: `translateY(-${scrollOffset * 0.4}px)` }}>
        <h2 className='parallax-content-heading-caption'>Jessa Lopez' Amazing Art Gallery</h2>
      </div>
      <div className='parallax-content-container'>
        <div onClick={showGallery} className='btn-link'>
          Gallery
        </div>
        <div onClick={showBlog} className='btn-link'>
          Blog
        </div>
        <div onClick={showContact} className='btn-link'>
          Contact
        </div>
      </div>
    </>
  )

  return (
    <section className="parallax">
      <div
        className="parallax-background"
        style={{ transform: `translateY(-${scrollOffset * 0.4}px)` }}
      />
      <div
        className="parallax-background-triangles"
        style={{ transform: `translateY(${scrollOffset * 0.67}px)` }}
      />
      <div className="parallax-content">{renderContent()}</div>
      <h1
        className='parallax-content-heading-fname'
        style={{ transform: `translateY(${scrollOffset * -0.69}px)` }}> Jessa.
      </h1>
      <h1
        className='parallax-content-heading-lname'
        style={{ transform: `translateY(${scrollOffset * -0.69}px)` }}> .Lopez
      </h1>
    </section>
  );
}

export default ParallaxHomepage;