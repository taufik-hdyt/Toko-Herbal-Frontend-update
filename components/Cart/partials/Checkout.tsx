import {
  Box,
  Button,
  HStack,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import ModalCheckOut from "../../Modals/ModalCheckOut";

const CheckOut: React.FC = (): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Stack pt="6" pr="4">
      <HStack>
        <Box>
          <Text>Total:</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>Rp. 15000</Text>
        </Box>
      </HStack>

      <VStack mt="4">
        <Button
          bg="#57CAD5"
          color="white"
          fontWeight="bold"
          rounded="0"
          w="full"
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
        >
          Cancel
        </Button>
      </VStack>

      <ModalCheckOut isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default memo(CheckOut);
