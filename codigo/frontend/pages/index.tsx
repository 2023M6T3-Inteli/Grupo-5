import { Col, Row } from "react-styled-flexboxgrid";

export default function Home() {
  return (
      <Row>
        <Col xs={12} md={6}>
          Item 1
        </Col>
        <Col xs={12} md={6}>
          Item 2
        </Col>
      </Row>
  );
}
