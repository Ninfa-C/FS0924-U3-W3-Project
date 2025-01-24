import { Col, Image } from "react-bootstrap";

/* eslint-disable react/prop-types */
const CarouselCard = (props) => {
  return (
    <Col xs={11}>
      <div className="text-white">
        <div className="card-body bg-custom-dark pt-3">
          <h5 className="card-title opacity-50 text-uppercase fs-6 fw-bold mb-2">Nuova Stazione Radio</h5>
          <p className="card-text fs-3 mb-2 radio-title m-0">{props.text}</p>
        </div>
        <Image src={props.src} alt={props.alt} fluid className=" rounded-3"/>
      </div>
    </Col>
  );
};

export default CarouselCard;
