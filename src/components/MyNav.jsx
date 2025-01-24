import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MyNav = () => {
  //const navigate = useNavigate();

  return (
    <header className="bg-custom-light px-2">
      <Navbar expand="lg" className="">
        <Row className="w-100 align-items-center text-center">
          <Col xs={2}>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className=" border-0"
            >
              <List color="#FA586A" size={30} className="custom-list" />
            </Navbar.Toggle>
          </Col>
          <Col xs={8}>
            <Link to="/">
              <img
                src="/assets/logos/music.svg"
                width="70"
                height="70"
                style={{ filter: "invert(1)" }}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Col>
          <Col xs={2}>
            <Nav className="me-auto">
              <Nav.Link href="#" className=" fw-bold d-lg-none">
                Accedi
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Navbar.Collapse id="basic">
          <Nav className="d-lg-none">
            <Link to="/Weather" className="nav-link">
              <p>Home</p>
            </Link>
            <Link to="/Cities" className="nav-link">
              <p>Novità</p>
            </Link>
            <Link to="/Settings" className="nav-link">
              <p>Radio</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default MyNav;
