import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { currency } from "../utils/currency"

type StoreItemProps = {
     id: number
     name: string
     description: string
     price: number
     imgUrl: string
}

export function ServiceItem({ id, name, description, price, imgUrl }: StoreItemProps) {
          const {
               getItemQuantity, 
               increaseCartQuantity, 
               decreaseItemQuantity, 
               removeFromCart } = useShoppingCart()
               const quantity = getItemQuantity(id)

          return (
               <Card className="h-100">
               <Card.Img
                    variant="top"
                    src={imgUrl}
                    height="0px"
                    style={{ objectFit: "cover" }}
                    />
               <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4" style={{ gap : "5rem"}}>
                         <span className="fs-1">{name}</span>
                         <span className="fs-4">{description}</span>
                         <span className="ms-4 text-muted">{currency(price)}</span>
                    </Card.Title>
                    <div className="fs-2 mt-auto">
                         {quantity === 0 ? (
                              <Button className="w-100" onClick={() => increaseCartQuantity(id)}>Agregar a la bolsita (uwu)</Button>
                         ) : <div className="d-flex align-items-center flex-column" style={{ gap : ".5rem"}}>
                              <div className="d-flex align-items-center justify-content-center" style={{ gap : ".5rem"}}>
                                   <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                                   <div>
                                   <span className="fs-3">{quantity}</span> en bolsita
                                   </div>
                                   <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                              </div>
                              <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">Remover de bolsita</Button>
                              </div>}
                    </div>
               </Card.Body>
          </Card>
          )
}