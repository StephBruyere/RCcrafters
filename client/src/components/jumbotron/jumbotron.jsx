import React from "react";
import "./jumbotron.css";

const Jumbotron = () =>

<div className="container-fluid jumbotronContainer"> 
  <div id="myCarousel1" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel1" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel1" data-slide-to="1"></li>
      <li data-target="#myCarousel1" data-slide-to="2"></li>
      <li data-target="#myCarousel1" data-slide-to="3"></li>
      <li data-target="#myCarousel1" data-slide-to="4"></li>
      <li data-target="#myCarousel1" data-slide-to="5"></li>
      <li data-target="#myCarousel1" data-slide-to="6"></li>
      <li data-target="#myCarousel1" data-slide-to="7"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src="./assets/imgs/carousel/jet1.jpg" alt="10th Yellow F18"/>
      </div>
      <div className="item">
        <img src="./assets/imgs/carousel/jet2.jpg" alt="F86"/>
      </div>
      <div className="item">
        <img src="./assets/imgs/carousel/jet3.jpg" alt="JHH F4 Phantom"/>
      </div>
      <div className="item">
      <img src="./assets/imgs/carousel/jet4.jpg" alt="JHH One 9th Mirage"/>
      </div>
      <div className="item">
      <img src="./assets/imgs/carousel/jet5.jpg" alt="Fighter Jet"/>
      </div>
      <div className="item">
      <img src="./assets/imgs/carousel/jet6.jpg" alt="One 9th F9F Panther"/>
      </div>
      <div className="item">
      <img src="./assets/imgs/carousel/jet7.jpg" alt="One 10th A7 Corsair"/>
      </div>
    </div>
    
    <a className="left carousel-control" href="#myCarousel1" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel1" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

export default Jumbotron;
