import React from 'react'
import img from '../assets/gianne.jpg';
import '../css/aboutme.css';

export default function About() {
  return (
    <div>
      <div id="img-gianne-div">
        <img id="img-gianne" src={img} width="200" height="220"/>
        <p className="align-text">
          Ut sed elit fringilla, commodo felis nec, iaculis lectus. Integer malesuada placerat nisl. Nulla lobortis nibh at quam vestibulum elementum. Donec dictum vestibulum sapien. Proin vel est purus. Sed arcu lacus, molestie sed viverra in, venenatis sit amet tellus. Donec et nunc iaculis, aliquet dui ac, luctus lacus. Maecenas imperdiet viverra urna volutpat elementum.
        </p>
      </div>
    </div>
  )
}
