import { Col, Container, Image, Row } from "react-bootstrap";
import {
  PlayFill,
  Repeat,
  Shuffle,
  SkipEnd,
  SkipStart,
} from "react-bootstrap-icons";

const TopNavLg = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center opacity-75">
              <button className="btn">
                <Shuffle color="white" className="custom" />
              </button>
              <button className="btn" color="white">
                <SkipStart color="white" className="custom" />
              </button>
              <button type="button" id="playPause" className="btn fs-3">
                <PlayFill color="white" className="custom" />
              </button>
              <button className="btn">
                <SkipEnd color="white" className="custom" />
              </button>
              <button className="btn">
                <Repeat color="white" className="custom" />
              </button>
            </div>
          </Col>
          <Col>
            <Image
              src="public\assets\logos\apple.svg"
              alt="Apple music Logo"
              style={{ filter: "invert(0.9)" }}
            />
          </Col>
          <div
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <input type="range" id="Barra" value="0" />
          </div>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default TopNavLg;
