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
} from "@chakra-ui/react";
import { memo } from "react";
import Checkout from "./partials/Checkout";
import ItemCart from "./partials/ItemCart";

const CartItem: React.FC = (): JSX.Element => {
  return (
    <GridItem pl="4" bg="white" area={"cart2"}>
      <Stack pr="4" h="full" overflowY="auto" maxH="calc(100vh - 200px)">
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </Stack>
      <Checkout />
    </GridItem>
  );
};

export default memo(CartItem);
