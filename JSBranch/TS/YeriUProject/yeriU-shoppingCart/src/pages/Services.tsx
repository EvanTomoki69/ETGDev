import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { ProductSearchBar } from "../components/ProductSearchBar";
import { ServiceItem } from "../components/ServiceItem";
import serviceItems from "../data/services.json";

export function Services() {
     const productRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

     const handleSelect = (productId: number) => {
          const ref = productRefs.current[productId];
          if (ref) {
               ref.scrollIntoView({ behavior: "smooth" });
          }
     };

     return (
     <>
          <h1>Selecciona los servicios nwn)</h1>
          <ProductSearchBar onSelect={handleSelect} />
          <Row md={2} xs={2} lg={1} className="g-3">
               {serviceItems.map(item => (
                    <Col key={item.id} ref={el => productRefs.current[item.id] = el}>
                         <ServiceItem {...item} />
                    </Col>
               ))}
          </Row>
     </>
     )
}