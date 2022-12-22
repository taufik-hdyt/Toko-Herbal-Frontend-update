import { Box, GridItem, HStack, Text } from "@chakra-ui/react";
import { memo } from "react";
import { useAppSelector } from "../../hooks/hooks";

const Cart: React.FC = (): JSX.Element => {
  const { cartItems } = useAppSelector((state) => state.cart);
  return (
    <GridItem pl="2" bg="white" area={"cart1"}>
      <HStack h="full" justify="center">
        <Text>Cart</Text>
        <Box p="1" color="white" bg="#57CAD5" rounded={"full"}>
          {cartItems?.map((e) => e.qty).reduce((a, b) => a + b, 0) ?? 0}
        </Box>
      </HStack>
    </GridItem>
  );
};

export default memo(Cart);
