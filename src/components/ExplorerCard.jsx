/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

const ExplorerCard = (props) => {
  return (
    <Col xs={12} lg={4}>
      <Row className=" rounded-2 text-red-custom bg-custom-light px-1 py-3 m-0 mb-2">
        <Col xs={11}>
          <p>{props.text}</p>
        </Col>
        <Col xs={1} className="p-0">
          <ChevronRight />
        </Col>
      </Row>
    </Col>
  );
};
export default ExplorerCard;
