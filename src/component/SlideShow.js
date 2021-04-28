import React,{useEffect} from 'react';

var $ = window.$;
function SlideShow() {
    var eleDiv=React.createRef();
    useEffect(()=>{
        if($('.slick-slider-responsive').length>0)
        $(eleDiv.current).slick();
    })
  return (
    <div className="col-sm-12 col-lg-12">
      <div className="mb-3 card" style={{borderRadius:'10px'}}>
            <div className="card-body">
            <h5 className="card-title">Responsive</h5>
            <div className="slick-slider-responsive" ref={eleDiv}  data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
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
