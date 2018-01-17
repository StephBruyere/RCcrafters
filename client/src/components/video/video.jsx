import React from "react";
import "./video.css";

const Video = () =>
  <div className="modal fade" id="myModal1" role="dialog">
    <div className="modal-dialog">
    
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Watch how we test the landing gear systems</h4>
        </div>
        <div className="modal-body">
        <div className="container-fluid jumbotronContainer"> 
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>
      
          <div className="carousel-inner">
            <div className="item active">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/11cIQPZauc4" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UxVMxwCSd9Q" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
      
      
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default close-btn" data-dismiss="modal">Close</button>
        </div>
      </div>  
    </div>
  </div>

export default Video;
