import React, { useEffect } from 'react';

function BackgroundCircles() {
  useEffect(() => {
    const circles = document.querySelectorAll('.circles li');

    circles.forEach((circle) => {
      const circleElement = circle;
      const circleWidth = getRandomSize();
      const circleHeight = circleWidth;

      const maxTextSize = Math.min(circleWidth, circleHeight) * 0.12;
      const textSize = maxTextSize + 'px';

      if (circle instanceof HTMLElement) {
        circle.style.width = circleWidth + 'px';
        circle.style.height = circleHeight + 'px';
        circle.style.fontSize = textSize;
      }
    });
  }, []);

  const getRandomSize = () => {
    // Generate a random size between 20 and 150 pixels
    return Math.floor(Math.random() * (150 - 20 + 1)) + 20;
  };

  // CSS accounts for list going up to 20 
  return (
    <div className="home-right-part">
      <ul className="circles">
        <li id="circle1">Typescript</li>
        <li id="circle2">HTML</li>
        <li id="circle3">CSS</li>
        <li id="circle4">Javascript</li>
        <li id="circle5">React</li>
        <li id="circle6">Wordpress</li>
        <li id="circle7">Angular</li>
        <li id="circle8">NgRx</li>
        <li id="circle9">REST Api</li>
        <li id="circle10">GraphQL</li>
        <li id="circle11">SCSS</li>
        <li id="circle12">GitHub</li>
        <li id="circle13">PHP</li>
        <li id="circle14">SQL</li>
        <li id="circle15">Java</li>
        <li id="circle16">Design</li>
        <li id="circle17">Development</li>
      </ul>
    </div>
  );
}

export default BackgroundCircles;
