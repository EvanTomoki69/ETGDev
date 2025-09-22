import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { serviceItem } from "../data/services.json";

type CartItemProps = {
     id: number;
     quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
     const {removeFromCart} = useShoppingCart()
     const item = serviceItem.find(i => i.id === id)
     if (item == null) return null

     return (
          <Stack direction="horizontal" gap={2}>
              
          </Stack>
     )
}