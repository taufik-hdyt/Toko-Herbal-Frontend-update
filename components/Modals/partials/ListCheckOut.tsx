import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import { ICartItem } from "../../../redux/slices/cart.slices";

interface IProps {
  cartItem: ICartItem;
}

const ListCheckOut: React.FC<IProps> = ({ cartItem }): JSX.Element => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={"1.5"}>
      <GridItem w="80">
        <Text fontSize="1em" color="black" fontWeight="semibold">
          {cartItem.name}
        </Text>
      </GridItem>

      <GridItem w="12">
        <Text textAlign="center">{cartItem.qty}</Text>
      </GridItem>
      <GridItem w="36">
        <Text
          fontSize="1rem"
          color="black"
          fontWeight="semibold"
          textAlign="end"
        >
          Rp.{cartItem.price}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default memo(ListCheckOut);
