import React from 'react';
import {Link} from "react-router-dom";

function SlideShow() {
  return (
    <div className="col-sm-12 col-lg-12">
      <div className="mb-3 card" style={{borderRadius:'10px'}}>
            <div className="card-body">
            <h5 className="card-title">Multiple Items</h5>
            <div className="slick-slider" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                <div>
                    <div className="slider-item">1</div>
                </div>
                <div>
                    <div className="slider-item">2</div>
                </div>
                <div>
                    <div className="slider-item">3</div>
                </div>
                <div>
                    <div className="slider-item">4</div>
                </div>
                <div>
                    <div className="slider-item">5</div>
                </div>
                <div>
                    <div className="slider-item">6</div>
                </div>
                <div>
                    <div className="slider-item">7</div>
                </div>
                <div>
                    <div className="slider-item">8</div>
                </div>
                <div>
                    <div className="slider-item">9</div>
                </div>
                <div>
                    <div className="slider-item">10</div>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default SlideShow;
