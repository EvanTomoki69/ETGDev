import { Col, Row } from "react-bootstrap";
import { ServiceItem } from "../components/ServiceItem";
import serviceItems from "../data/designs.json";

export function Designs() {
     return (
     <>
          <h1>Selecciona los diseños uwu)</h1>
          <Row md={2} xs={2} lg={1} className="g-3">
               {serviceItems.map(item => (
                    <Col key={item.id}>
                    <ServiceItem {...item} />
                    </Col>
               ))}
          </Row>
     </>
     )
}