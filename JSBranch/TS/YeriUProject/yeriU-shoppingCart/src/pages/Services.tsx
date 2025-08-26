import { Col, Row } from "react-bootstrap";
import { ServiceItem } from "../components/ServiceItem";
import serviceItems from "../data/services.json";

export function Services() {
     return (
     <>
          <h1>Selecciona los servicios nwn)</h1>
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