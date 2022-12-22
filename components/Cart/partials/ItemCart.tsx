import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { memo } from "react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  decrementQty,
  ICartItem,
  incrementQty,
  removeFromCard,
} from "../../../redux/slices/cart.slices";
import { useAppDispatch } from "../../../hooks/hooks";

interface IProps {
  cartItem: ICartItem;
}

const ItemCart: React.FC<IProps> = ({ cartItem }): JSX.Element => {
  const dispath = useAppDispatch();
  return (
    <HStack mt="2">
      <Image w="100px" src="/images/product1.jpg" alt="Product 1" />
      <Box flex="1">
        <Text>{cartItem.name}</Text>
        <Flex justify="space-between" mt="8">
          <Flex>
            <Button
              w="30px"
              h="30px"
              border="1px solid #82DE3A"
              bg="rgba(130, 222, 58, 0.2)"
              color="#82DE3A"
              rounded="0"
              fontWeight="bold"
              onClick={() => dispath(decrementQty(cartItem))}
              disabled={cartItem.qty === 1}
            >
              <MinusIcon />
            </Button>

            <Box
              textAlign="center"
              w="35px"
              h="30px"
              border="1px solid #82DE3A"
              color="#82DE3A"
              fontSize="20px"
            >
              {cartItem.qty}
            </Box>
            <Button
              w="30px"
              h="30px"
              border="1px solid #82DE3A"
              bg="rgba(130, 222, 58, 0.2)"
              color="#82DE3A"
              rounded="0"
              fontWeight="bold"
              onClick={() => dispath(incrementQty(cartItem))}
              disabled={Number(cartItem.qty) >= Number(cartItem.stock)}
            >
              <AddIcon />
            </Button>
            <Tooltip label="Hapus" bg="whatsapp.600">
              <DeleteIcon
                onClick={() => dispath(removeFromCard(cartItem))}
                ml="2"
                h="full"
                cursor={"pointer"}
              />
            </Tooltip>
          </Flex>
          <Text>Rp. {cartItem.price * cartItem.qty}</Text>
        </Flex>
      </Box>
    </HStack>
  );
};

export default memo(ItemCart);
