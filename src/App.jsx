import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHomepage from "./components/MyHomepage";
import Footer from "./components/Footer";
import NavResponsive from "./components/NavResponsive";
import { Col, Container, Row } from "react-bootstrap";
import Result from "./components/Results";
import { useMediaQuery } from "react-responsive";
import TopNavLg from "./components/TopNavLg";
import Player from "./components/Player";

function App() {
  const lg = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <>
      <BrowserRouter>
        <Container fluid className="">
          <Row className="custom-h">
            <Col xs={12} lg={2} className="bg-aside p-0 sticky-top custom-h">
              <NavResponsive />
            </Col>
            <Col xs={12} lg={10} className="p-0 custom-h overflow-y-scroll ">
              {lg ? <TopNavLg /> : ""}
              <Routes>
                <Route path="/" element={<MyHomepage />} />
                <Route path="/Result/:id" element={<Result />} />
              </Routes>
              <Footer />
            </Col>
          </Row>
          <Row>
            <Player />
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
