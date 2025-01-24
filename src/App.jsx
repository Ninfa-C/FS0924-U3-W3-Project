import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHomepage from "./components/MyHomepage";
import Footer from "./components/Footer";
import NavResponsive from "./components/NavResponsive";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col xs={12} lg={2} className="bg-aside p-0">
              <NavResponsive />
            </Col>
            <Col xs={12} lg={10} className="p-0">
              <Routes>
                <Route path="/" element={<MyHomepage />} />
              </Routes>
              <Footer />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
