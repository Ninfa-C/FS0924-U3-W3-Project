import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {
  PersonFill,
  PlayFill,
  Repeat,
  Shuffle,
  SkipEnd,
  SkipStart,
} from "react-bootstrap-icons";

const TopNavLg = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Row className=" align-items-center text-center p-0 bg-custom-light">
          <Col>
            <div className="d-flex justify-content-center opacity-75">
              <button className="btn">
                <Shuffle color="white" className="custom" />
              </button>
              <button className="btn" color="white">
                <SkipStart color="white" className="custom" />
              </button>
              <button className="btn fs-3">
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

          <Col className="d-flex align-items-center">
            <div aria-valuemin="0" aria-valuemax="100" className="me-3">
              <input type="range" id="Barra" value="30" />
            </div>
            <Button className="btn text-light bg-red-custom">
              <PersonFill color="white" className="custom me-2" />
              Accedi
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopNavLg;
