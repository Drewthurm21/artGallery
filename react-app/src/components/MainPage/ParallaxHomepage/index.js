import React, { useEffect, useState } from 'react';
import './ParallaxHomepage.css'

const ParallaxHomepage = () => {

  let stars = document.getElementById('stars');
  let stars2 = document.getElementById('stars2');
  let moon = document.getElementById('moon');
  let rock = document.getElementById('rock');
  let masjid = document.getElementById('masjid');
  let header = document.getElementById('header');
  let text = document.getElementById('text');

  // window.addEventListener('scroll', function () {
  //   let value = window.scrollY;
  //   stars.style.bottom = value * 0.05 + '%';
  //   stars2.style.bottom = value * 0.025 + '%';
  //   moon.style.bottom = value * -0.5 + 'px';
  //   rock.style.bottom = value * -0.5 + 'px';
  //   masjid.style.bottom = value * -0.15 + 'px';
  //   header.style.top = value * 0.5 + 'px';
  //   text.style.right = -100 + value * 0.5 + '%';
  //   text.style.top = 50 + value * 0.1 + '%';
  // })



  // const toggleMenu = document.querySelector('.toggle');
  // const navigation = document.querySelector('.navigation');
  // toggleMenu.onclick = function () {
  //   toggleMenu.classList.toggle('active');
  //   navigation.classList.toggle('active');
  // }

  return (
    <>
      <header id="header">
        <a href="#" className="logo">Eid al-Fitr</a>
        <div className="toggle"></div>
        <ul className="navigation">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Gifts</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
      <section>
        <img src="./images/stars.png" id="stars"></img>
        <img src="./images/stars2.png" id="stars2"></img>
        <img src="./images/moon.png" id="moon"></img>
        <h2 id="text">Jess Lopez</h2>
        <img src="./images/rock.png" id="rock"></img>
        <img src="./images/masjid.png" id="masjid"></img>
        <img src="./images/bottom.png" id="bottom"></img>
        <img src="./images/lamp.png" id="lamp"></img>
      </section>
      <div className="sec">
        <h2>Happy eid mubarak to you and your family.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Vero iste laboriosam iusto sapiente voluptatum a, incidunt culpa quae.
        Necessitatibus vero exercitationem accusantium nemo culpa ipsa tempora quia?
        Aliquam, nemo doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Id quidem dolore atque maiores laudantium, corporis quam quisquam vero repellat ad
        nobis asperiores incidunt veritatis neque eum delectus consequuntur quibusdam eaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque molestiae
        fugit ratione aliquam suscipit, perspiciatis in quod molestias quisquam doloribus at
        tempore. Minima aperiam molestias in nobis eaque ipsam.
          <br></br>Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Vero iste laboriosam iusto sapiente voluptatum
          a, incidunt culpa quae. Necessitatibus vero exercitationem accusantium nemo culpa ipsa
          tempora quia? Aliquam, nemo doloribus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Id quidem dolore atque maiores laudantium, corporis quam quisquam
          vero repellat ad nobis asperiores incidunt veritatis neque eum delectus consequuntur
          quibusdam eaque.
          <br></br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          iste laboriosam iusto sapiente voluptatum a, incidunt culpa quae. Necessitatibus vero
          exercitationem accusantium nemo culpa ipsa tempora quia? Aliquam, nemo doloribus.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quidem dolore atque
          maiores laudantium, corporis quam quisquam vero repellat ad nobis asperiores incidunt
          veritatis neque eum delectus consequuntur quibusdam eaque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit cumque molestiae fugit ratione aliquam suscipit, perspiciatis in quod molestias quisquam doloribus at tempore. Minima aperiam molestias in nobis eaque ipsam.
          <br></br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero iste laboriosam iusto sapiente voluptatum a, incidunt culpa quae. Necessitatibus vero exercitationem accusantium nemo culpa ipsa tempora quia? Aliquam, nemo doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quidem dolore atque maiores laudantium, corporis quam quisquam vero repellat ad nobis asperiores incidunt veritatis neque eum delectus consequuntur quibusdam eaque.
          <br></br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero iste laboriosam iusto sapiente voluptatum a, incidunt culpa quae. Necessitatibus vero exercitationem accusantium nemo culpa ipsa tempora quia? Aliquam, nemo doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quidem dolore atque maiores laudantium, corporis quam quisquam vero repellat ad nobis asperiores incidunt veritatis neque eum delectus consequuntur quibusdam eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque molestiae fugit ratione aliquam suscipit, perspiciatis in quod molestias quisquam doloribus at tempore. Minima aperiam molestias in nobis eaque ipsam.
        </p>
      </div>

    </>
  )
}

export default ParallaxHomepage;