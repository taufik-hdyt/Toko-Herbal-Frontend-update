import {
  Box,
  Button,
  Flex,
  Heading,
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
import { memo } from "react";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCheckOut: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
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
              Pevita Pearce
            </Text>
          </HStack>
        </ModalHeader>
        <ModalBody>
          <VStack mt="3" align="stretch" bg="green.100">
            <Heading>Hay</Heading>
          </VStack>
          <HStack mt="6" justify="end">
            <Text fontSize="20px" color="black" fontWeight="semibold">
              Total :
            </Text>
            <Text fontSize="20px" color="black" fontWeight="semibold">
              Rp. 15000000
            </Text>
          </HStack>
        </ModalBody>

        <ModalFooter display="inline-block">
          <Button fontSize="20px" w="full" bg="#F24F8A" color="white">
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
