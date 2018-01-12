import React from 'react';
import Logo from '../Logo/city.jpeg';
import { Link } from "react-router-dom";


const Carousel = props => (
	<div className = 'container-center'>
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Logo} style={{width: 500, height: 500}} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
            <button type="button" class="btn btn-secondary btn-sm"> 
            <Link to="/feed">POST</Link> 
            </button>
			 </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Logo} style={{width: 500, height: 500}} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
			    <button type="button" class="btn btn-secondary btn-sm"> 
            		<Link to="/lean">LEARN</Link> 
            	</button>
			 </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
	);

export default Carousel; 