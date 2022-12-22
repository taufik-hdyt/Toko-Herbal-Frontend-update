import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearCard, ICartItem } from "../../redux/slices/cart.slices";
import ListCheckOut from "./partials/ListCheckOut";
import nookies from "nookies";
import axios from "axios";
import utils from "../../utils/fetcher";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCheckOut: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cookies = nookies.get();
  const token = cookies?.token ?? null;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const order = (e: FormEvent) => {
    e.preventDefault();
    const body = {
      cart_items: cartItems.map((e) => {
        return {
          id_product: e.id,
          qty: e.qty,
        };
      }),
    };

    axios
      .post("http://localhost:5000/api/v1/order", body, config)
      .then(function (response) {
        console.log(response);
        onClose();
        dispatch(clearCard());
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex>
            <Box>
              <Text fontSize="20px" color="black" fontWeight="semibold">
                Checkout
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="20px" color="black" fontWeight="semibold">
                Receipt no: 010410919
              </Text>
            </Box>
          </Flex>

          <HStack>
            <Text fontSize="16px" color="black" fontWeight="semibold">
              Cashier :
            </Text>

            <Text fontSize="16px" color="black" fontWeight="semibold">
              admin
            </Text>
          </HStack>
        </ModalHeader>
        <ModalBody>
          <VStack mt="3" align="stretch">
            {cartItems?.map((cartItem: ICartItem, index: number) => {
              return (
                <ListCheckOut
                  cartItem={cartItem}
                  key={`produk-item-${index}`}
                />
              );
            })}
          </VStack>
          <HStack mt="6" justify="end">
            <Text color="black" fontWeight="semibold">
              Total :
            </Text>
            <Text color="black" fontWeight="semibold">
              Rp.
              {cartItems
                ?.map((e) => e.price * e.qty)
                .reduce((a, b) => a + b, 0) ?? 0}
            </Text>
          </HStack>
        </ModalBody>

        <ModalFooter display="inline-block">
          <Button
            fontSize="20px"
            w="full"
            bg="#F24F8A"
            color="white"
            onClick={order}
          >
            Print
          </Button>
          <Text textAlign="center" fontSize="20px" fontWeight="semibold">
            Or
          </Text>
          <Button fontSize="20px" w="full" bg="#57CAD5" color="white">
            Send email
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalCheckOut);
