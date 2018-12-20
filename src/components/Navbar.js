import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { Button, Icon } from '@salesforce/design-system-react';

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Button label="Hello"/>
        <svg width="200" height="218.5" viewBox="597 268 200 218.5">
            <g style={{ mixBlendMode: "source-over"}} transform="matrix(2.2270712095546004,0,0,2.2270712095546004,585.5972162689194,265.9611282480728)">
                <path d="M92.9 79.3s.4-15.1-2.1-24.5-9.5-21.7-9.5-21.7 1.3-1.4 2.1-3.1c.8-1.7 1.1-3.6 1.1-3.6s5.2 7.8 8.9 25.9-.5 27-.5 27zM76.1 31.7c-1.1.5-3.2 2.3-3.2 2.3s1.4-2.4 2.1-4.3c.8-1.9.9-2.5 1.1-3.4.3-1.2.5-3.6-1.1-7.4-1.5-3.8-4.7-5.8-6.4-7.1-2-1.4-6.4-3.3-10.2-4.2-3.9-.8-7.1-.6-7.1-.6s3.9-2.2 6.3-5.8C58.5-.2 67.9 4.4 74 9s8.5 7.7 9 11.5c.6 3.8-1.1 7.6-3 9.9-.7.9-2.8.8-3.9 1.3zM73.5 22s.8 3 .4 5.3c-.5 2.3-1.9 3.5-3 7.8-1.1 4.4-.2 8.9-2.4 13.5-3.2 5.1-15.3 10.6-15.3 10.6h-6.4s-12.1-5.5-15.3-10.6c-2.2-4.6-1.3-9.2-2.4-13.5-1.1-4.4-2.5-5.5-3-7.8-.4-2.3.4-5.3.4-5.3s.1-4.4 7.2-9c7-4.5 15.7-4.1 16.3-4.1s9.3-.4 16.2 4.1c7.2 4.6 7.3 9 7.3 9zM59 46.9s1.4-2.2 2.2-5.3c.8-3.2.8-6.5.8-6.5s-.9.1-1.8.8-1.5 1.4-1.5 1.4.7 1.2.9 3.5c.2 2.3-.6 6.1-.6 6.1zm-1.8-14c-3.6 1.6-4.9 3.1-4.9 3.1s1.2.6 1.7 1 1 1.5 1 1.5.6-1.5 2.6-3.5 8.5-4.5 8.5-4.5-5.4.8-8.9 2.4zM41.6 7.6c-3.9.8-8.2 2.7-10.2 4.2-1.8 1.3-4.9 3.3-6.4 7.1s-1.3 6.2-1.1 7.4c.2.9.3 1.6 1.1 3.4.8 1.9 2.1 4.3 2.1 4.3s-2.1-1.8-3.2-2.3-3.2-.5-3.9-1.3c-1.9-2.2-3.5-6.1-3-9.9.6-3.8 3-6.9 9-11.5S41.4-.3 42.4 1.2C44.8 4.8 48.7 7 48.7 7s-3.2-.2-7.1.6zM9.2 54.9c-2.5 9.4-2.1 24.5-2.1 24.5s-4.1-8.9-.5-27 8.9-25.9 8.9-25.9.2 1.8 1.1 3.6c.8 1.7 2.1 3.1 2.1 3.1s-7 12.3-9.5 21.7zm11.4-17.2s-.4 2.5 0 3.8 3 2.9 3 2.9-5.2 4.6-8.3 15.8-1.1 30.7-1.1 30.7-2.7-5.2-3.2-16.4 1.1-17.3 2.3-21.1c1.1-3.9 7.3-15.7 7.3-15.7zm8.7 17.1s2.3 2.5 5.8 3.9c3.5 1.5 8.1 1.9 8.1 1.9.1 0 .2.1.2.3l-1 9.1c0 .1-.1.2-.2.1l-3.6-4.4c-.1-.1-.3-.2-.4-.3 0 0-3.2-1.3-5.1-2-2-.7-5.4-2.5-5.4-2.5-.1-.1-.2-.2-.2-.3l-.2-3.7s-.9-3.9-1.4-5.9c-.5-2.1-2.2-6.4-2.2-6.4s2.8 3.2 3.6 4.9c.8 1.5 2 5.3 2 5.3zm-6.1-2.3c.1-.1.1-.1.2 0 0 0 .8 4.3.9 5 .2.7 0 2.5 0 2.5s-3.1 7.4-3.9 15.3.8 23.7.8 23.7-3.2-10.3-3.9-19.6c-.7-9.2 1.3-15.3 1.5-16.4 1.9-6.8 4.4-10.5 4.4-10.5zm3.6 10.8c0-.3.2-.4.5-.3l10 3.7c.2.1.6.3.8.5l3.7 4.1c.1.1.1.3.1.4l-1.1 12c0 .1-.1.3-.1.4l-.6.9c-.1.2-.4.2-.5 0l-13-15.7c-.2-.2-.3-.6-.3-.8l.5-5.2zm18-2.7h10.4l2.9 25.3c0 .4-.2.9-.5 1.1l-.7.4c-.3.2-.9.4-1.3.4H50l-5.6-.1c-.4 0-1-.2-1.3-.4l-.7-.4c-.3-.2-.6-.7-.5-1.1l2.9-25.2zm13.4 10.7l3.7-4.1c.2-.2.5-.4.8-.5l10-3.7c.2-.1.5 0 .5.3l.5 5.1c0 .3-.1.6-.3.8l-12.9 16c-.2.2-.4.2-.5 0l-.6-.9c-.1-.1-.1-.3-.1-.4l-1.1-12c-.1-.3-.1-.5 0-.6zm14.3-10.8c0 .1-.1.3-.2.3 0 0-3.4 1.8-5.4 2.5s-5.1 2-5.1 2c-.1 0-.3.2-.4.3L57.8 70c-.1.1-.2.1-.2-.1l-1-9.1c0-.1.1-.2.2-.3 0 0 4.5-.4 8.1-1.9 3.5-1.5 5.8-3.9 5.8-3.9s1.2-3.8 2-5.5 3.6-4.9 3.6-4.9-1.7 4.4-2.2 6.4c-.5 2.1-1.4 5.9-1.4 5.9l-.2 3.9zm6.9-19c.4-1.3 0-3.8 0-3.8s6.2 11.8 7.3 15.7c1.1 3.8 2.7 10 2.3 21.1-.5 11.2-3.2 16.4-3.2 16.4s2-19.5-1.1-30.7-8.3-15.8-8.3-15.8 2.6-1.6 3-2.9zm-2.8 11c0-.1.1-.1.2 0 0 0 2.5 3.8 4.4 10.6.3 1.1 2.2 7.2 1.5 16.4S78.8 99 78.8 99s1.8-15.9.9-23.8c-1-7.8-4-15.2-4-15.2s-.2-1.7 0-2.5c.1-.7.9-5 .9-5z" style={{ fill: "#000000", fillOpacity: 1}}/>
            </g>
            <path style={{ fill: "#000000", mixBlendMode: "source-over", fillOpacity: 1, vectorEffect: "non-scaling-stroke"}} d="M0 0 L200 0 200 200 0 200 z" transform="matrix(0.200134631581928,0,0,0.200134631581928,697,329)"/>
            <g style={{ mixBlendMode: "source-over"}} transform="matrix(0.46479295654660635,0,0,0.46479295654660635,698,341)">
                <g style={{ fill: "#fffffff", fillRule: "evenodd", fillOpacity: 1}}>
                    <path d="M2 58h56V2H2v56zm57 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h58a1 1 0 0 1 1 1v58a1 1 0 0 1-1 1z" />
                    <path d="M46 55c-4.963 0-9-4.038-9-9a1 1 0 1 1 2 0c0 3.86 3.141 7 7 7s7-3.14 7-7-3.141-7-7-7c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9a1 1 0 1 1-2 0c0-3.86-3.141-7-7-7s-7 3.14-7 7 3.141 7 7 7c4.963 0 9 4.038 9 9s-4.037 9-9 9M25 55c-4.963 0-9-4.038-9-9a1 1 0 1 1 2 0c0 3.86 3.141 7 7 7s7-3.14 7-7V22a1 1 0 1 1 2 0v24c0 4.962-4.037 9-9 9"/>
                </g>
            </g>
            <g style={{ mixBlendMode: "source-over"}} transform="matrix(0.589782267831371,0,0,0.5897822678313709,656,281.552675160906)">
                <path d="M82.207 41.768c.017-.369.028-.741.028-1.114C82.236 27.038 71.188 16 57.56 16c-9.869 0-18.381 5.791-22.327 14.155a13.452 13.452 0 0 0-7.832-2.489c-7.295 0-13.208 5.717-13.208 12.768 0 1.047.133 2.064.379 3.037C6.251 45.242 0 52.768 0 61.786 0 72.12 8.208 80 18.333 80h60.123C88.145 80 96 71.726 96 60.906c0-9.382-5.907-17.219-13.793-19.138z" style={{ fill: "#ffffff", fillOpacity: 1}}/>
            </g>
        </svg>
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Apex Predator" style={{ width: '200px' }} />
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
      </div>
      <div className="navbar-end has-text-centered">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
