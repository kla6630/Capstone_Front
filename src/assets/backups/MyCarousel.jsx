import { Container } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

export const MyCarousel = () => {
  return (
    <Container className="mt- my-3">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="https://picsum.photos/800/400" alt="First slide" />
          <Carousel.Caption>
            <div className="MyCarouselCaption">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="https://picsum.photos/800/400" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://picsum.photos/800/400" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
