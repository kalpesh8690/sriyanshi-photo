import React, { useEffect, useState } from 'react'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import YouTube, { YouTubeProps } from 'react-youtube';

function Home() {

  

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);

    

  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const opts = {
    height: '390',
    width: '620',
    playerVars: {
      autoplay: 1,
    },
  };
  
 



  return (
    <div className='homeComp'>
      <div className='imageSliderWrraper'>
        <div className='ImageSlider'>
        <Carousel>
                <div>
                    <img src="./images/img1.jpg" />
                    
                </div>
                <div>
                    <img src="./images/img2.jpg" />
                   
                </div>
                <div>
                    <img src="./images/img3.jpg" />

                </div>
                <div>
                    <img src="./images/img4.jpg" />
                </div>
            </Carousel>
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
