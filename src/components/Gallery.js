import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { HiDownload } from 'react-icons/hi';
import Image from 'react-bootstrap/Image';
import GalleryImages from '../constants/gallery';

export default function Gallery() {
  return (
    <Container>
      <Row className="gallery-head">
        <h1>Gallery</h1>
      </Row>
      <div className="gallery-section container" id="gallery">
        <div className="row">
          {GalleryImages.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-4 col-6">
                <div className="d-block mb-4 mt-4 h-100 gallery-img">
                  <Image
                    src={item.number}
                    className={`img-${index}`}
                    fluid
                    thumbnail
                  />
                  <div className="overlay">
                    <a href={item.number} download className="download-icon">
                      <HiDownload className={`svg-${index}`} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
