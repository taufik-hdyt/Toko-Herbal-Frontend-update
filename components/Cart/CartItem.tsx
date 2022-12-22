import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Image,
  MenuIcon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { ICartItem } from "../../redux/slices/cart.slices";
import Checkout from "./partials/Checkout";
import ItemCart from "./partials/ItemCart";

const CartItem: React.FC = (): JSX.Element => {
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    <GridItem pl="4" bg="white" area={"cart2"}>
      <Stack pr="4" h="full" overflowY="auto" maxH="calc(100vh - 200px)">
        <VStack align="stretch" spacing="4">
          {cartItems?.map((cartItem: ICartItem, index: number) => {
            return (
              <ItemCart cartItem={cartItem} key={`produk-item-${index}`} />
            );
          })}
        </VStack>

        {/* Jika Keranjang kosong */}
        {cartItems.length === 0 && (
          <VStack>
            <Image mt="44" src="/images/cartKosong1.png" alt="cart kosong" />
            <Text>Keranjang Kosong</Text>
          </VStack>
        )}
      </Stack>

      <Checkout />
    </GridItem>
  );
};

export default memo(CartItem);
