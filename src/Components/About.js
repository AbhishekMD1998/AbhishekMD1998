import React from 'react'
import Logo from '../images/about.jpeg'


export default function About() {
  return (
    <section className="section" id="about">
    <div className="section-title">
      <h2>about <span>us</span></h2>
    </div>

    <div className="section-center about-center">
      <div className="about-img">
        <img
          src={Logo}
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>explore the difference</h3>
        <p>
          About
        </p>
        <p>
         Paragraph
        </p>
        <a href="#" className="btn">read more</a>
      </article>
    </div>
  </section>
  )
}
