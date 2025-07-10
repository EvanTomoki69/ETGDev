import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { currency } from "../utils/currency"

type StoreItemProps = {
     id: number
     name: string
     price: number
     description: string
}

export function ServiceItem({ id, name, price, description}:
     StoreItemProps) {
          const {
               getItemQuantity, 
               increaseCartQuantity, 
               decreaseItemQuantity, 
               removeFromCart } = useShoppingCart()
               const quantity = getItemQuantity(id)

          return (<Card className="h-100">
               <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                         <span className="fs-2">{name}</span>
                         <span className="ms- text-muted">{currency(price)}</span>
                         <span className="fs-2">{description}</span>
                    </Card.Title>
                    <div className="mt-auto">
                         {quantity === 0 ? (
                              <Button className="w-100" onClick={() => increaseCartQuantity(id)}>Agregar al carrito (uwu)</Button>
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