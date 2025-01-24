import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const lang = useSelector((state) => {
    return state.user.language;
  });
  const dispatch = useDispatch();

  return (
    <footer className="bg-custom-light text-white py-4">
      <Container fluid>
        <Row className="align-items-center">
          <Col
            xs={12}
          >
            <div className="d-flex mb-3">
              <p
                onClick={() => {
                  dispatch({
                    type: "LANG_CHANGE",
                    payload: "Italia",
                  });
                }}
                className={`cursor-pointer  me-2 ${
                  lang === "Italia" ? "opacity-100" : "opacity-50"
                }`}
              >
                Italia
              </p>
              <span className=" opacity-50">|</span>
              <p
                onClick={() => {
                  dispatch({
                    type: "LANG_CHANGE",
                    payload: "English",
                  });
                }}
                className={`cursor-pointer ms-2 ${
                  lang === "English" ? "opacity-100" : "opacity-50"
                }`}
              >
                English (Uk)
              </p>
            </div>
          </Col>
          <Col xs={12} >
            <p className="mb-2">
              <span className=" opacity-50">Copyright © 2024 </span>Apple Inc. <span className=" opacity-50">Tutti i diritti riservati.</span> 
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a
                href="#"
                className="text-light nav-link"
                style={{ textDecoration: "none" }}
              >
                Condizioni dei servizi internet
              </a>
              <span className=" opacity-50">|</span>
              <a
                href="#"
                className="text-light nav-link"
                style={{ textDecoration: "none" }}
              >
                Apple Music e privacy
              </a>
              <span className=" opacity-50">|</span>
              <a
                href="#"
                className="text-light nav-link"
                style={{ textDecoration: "none" }}
              >
                Avviso sui cookie
              </a>
              <span className=" opacity-50">|</span>
              <a
                href="#"
                className="text-light nav-link"
                style={{ textDecoration: "none" }}
              >
                Supporto
              </a>
              <span className=" opacity-50">|</span>
              <a
                href="#"
                className="text-light nav-link"
                style={{ textDecoration: "none" }}
              >
                Feedback
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
