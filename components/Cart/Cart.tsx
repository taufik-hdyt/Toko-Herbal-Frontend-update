import { Box, GridItem, HStack, Text } from "@chakra-ui/react";
import { memo } from "react";

const Cart: React.FC = (): JSX.Element => {
  return (
    <GridItem pl="2" bg="white" area={"cart1"}>
      <HStack h="full" justify="center">
        <Text>Cart</Text>
        <Box p="1" color="white" bg="#57CAD5" rounded={"full"}>
          10
        </Box>
      </HStack>
    </GridItem>
  );
};

export default memo(Cart);
