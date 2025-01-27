import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {
  PersonFill,
} from "react-bootstrap-icons";


const TopNavLg = () => {
  return (
    <>
      <Container fluid>
        <Row className=" align-items-center text-center p-0 bg-custom-light">
         <Col></Col>
          <Col className="">
            <div className="bg-logo d-flex align-items-center justify-content-center">
              <Image
                src="/assets/logos/apple.svg"
                alt="Apple music Logo"
              />
            </div>
          </Col>

          <Col className="d-flex align-items-center justify-content-end">
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
