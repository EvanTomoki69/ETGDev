import Stack from "react-bootstrap/esm/Stack";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/services.json";

type CartItemProps = {
     id: number;
     quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {

     const { removeFromCart } = useShoppingCart()
     const item = storeItems.find(i => i.id === id)
     if (item == null) return null

     return (

          <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
               <div>
                    <span>{item.name}</span>
                    <span className="text-muted" style={{ fontSize: ".85rem", 
                    fontWeight: "bold",
                    fontFamily: "monospace"
                    }}>
                         x{quantity}
                    </span>
               </div>
               <div className="ms-auto">
                    ${item.price * quantity}
               </div>
               <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
               >
                    &times;
               </button>
          </Stack>

     )
}