
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import images from "./image";

const Slideshow = () => {
 
  
    const zoomInProperties = {
      indicators: true,
      scale: 1.4
    }
    return (
      <div className="slideShow">
        <Zoom {...zoomInProperties}>
          {images.map((each, index) => (
            <div key={index} style={{width: "50%"}}>
              <img  style={{ objectFit: "cover", width: "100%"}} src={each} />
            </div>
          ))}
        </Zoom>
      </div>
    )
  }
  
  export default Slideshow;


