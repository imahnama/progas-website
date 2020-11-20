import React from 'react';
import { Image, Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import footerIcons from '../constants/footer-icons';
import Slide1 from '../images/CarouselImage1.jpg';
import Slide2 from '../images/CarouselImage2.png';
import Slide3 from '../images/CarouselImage3.png';

export default function Slider() {
  return (
    <div className="carousel-wrapper slider">
      <Container>
        <Carousel infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
          <div>
            <Image src={Slide1} responsive />
          </div>
          <div>
            <div><Image src={Slide2} responsive /></div>
            <div className="nav-icons">
            <ul className="list-unstyled list-inline ">
              <li className="list-inline-item">
                {footerIcons.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className="btn-floating btn-sm rgba-white-slight mx-1 footer-icons"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={item.url}
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </li>
            </ul>
            </div>
          </div>
          <div>
            <Image src={Slide3} responsive />
          </div>
        </Carousel>
      </Container>
    </div>
  );
}
