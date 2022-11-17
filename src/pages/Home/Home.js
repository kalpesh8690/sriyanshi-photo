import React, { useEffect, useState } from 'react'
import './home.css'
import SimpleImageSlider from "react-simple-image-slider";
import YouTube, { YouTubeProps } from 'react-youtube';

function Home() {

  const images = [
    { url: "./images/img1.jpg" },
    { url: "./images/img2.jpg" }
  ]

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };



  return (
    <div className='homeComp'>
      <div className='imageSliderWrraper'>
        <div className='ImageSlider'>
          <SimpleImageSlider
            width={width}
            height={height - 150}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>
      </div>
      <div className='home-content'>
        <div className='welcomeTextWrraper'>
          <h1 className='welcomeText'>Welcome To <span >Sriyanshi</span> Photo</h1>
          <p className='descText'>We are also active on <span>Youtube</span></p>
        </div>
        <div className='youtubeWrraper'>
          <div className='youtubePlayer'>
            <YouTube videoId="EXHilM9mrNA" opts={opts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
