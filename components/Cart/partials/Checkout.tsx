import {
  Box,
  Button,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { clearCard } from "../../../redux/slices/cart.slices";
import ModalCheckOut from "../../Modals/ModalCheckOut";

const CheckOut: React.FC = (): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispath = useAppDispatch();

  return (
    <Stack pt="6" pr="4">
      <HStack>
        <Box>
          <Text>Total:</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>
            Rp.
            {cartItems
              ?.map((e) => e.price * e.qty)
              .reduce((a, b) => a + b, 0) ?? 0}
          </Text>
        </Box>
      </HStack>

      <VStack mt="4">
        <Button
          bg="#57CAD5"
          color="white"
          fontWeight="bold"
          rounded="0"
          w="full"
          disabled={cartItems.length === 0}
          onClick={onOpen}
        >
          Checkout
        </Button>

        <Button
          bg="#F24F8A"
          color="white"
          fontWeight="bold"
          rounded="0"
          w="full"
          onClick={() => dispath(clearCard())}
          disabled={cartItems.length === 0}
        >
          Cancel
        </Button>
      </VStack>

      <ModalCheckOut isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default memo(CheckOut);
