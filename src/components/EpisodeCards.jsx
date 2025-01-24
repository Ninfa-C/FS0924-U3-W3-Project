import { Col, Image } from "react-bootstrap";

/* eslint-disable react/prop-types */
const EpisodeCards = (props) => {
  return (
    <Col xs={11}>
      <div className="text-white">
         <Image src={props.src} alt={props.alt} fluid className=" rounded-3"/>
        <div className="card-body bg-custom-dark py-3">
          <p className="card-text mb-2">{props.text}</p>
        </div>
       
      </div>
    </Col>
  );
};

export default EpisodeCards;