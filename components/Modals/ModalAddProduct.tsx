import {
  Box,
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo, useState, FormEvent } from "react";
import { ICreateProduct } from "../../containers/Product/Product.types";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  addProduct: (data: ICreateProduct) => void;
}

const ModalAddProduct: React.FC<IProps> = ({
  isOpen,
  onClose,
  addProduct,
}): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [type, setType] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: ICreateProduct = {
      name,
      price,
      stock,
      brand,
      type,
    };
    addProduct(data);
  };

  return (
    <Stack>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <form onSubmit={onSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Tambah Produk</ModalHeader>

            <ModalBody>
              <Stack spacing="4">
                <HStack spacing="5px">
                  <Box w="200px" h="full">
                    <Text fontSize="20px" fontWeight="semibold">
                      Nama Produk
                    </Text>
                  </Box>
                  <Box w="full">
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      border="1px solid #CECECE"
                      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                    />
                  </Box>
                </HStack>

                <HStack spacing="5px">
                  <Box w="200px" h="full">
                    <Text fontSize="20px" fontWeight="semibold">
                      Harga
                    </Text>
                  </Box>
                  <Box w="full">
                    <Input
                      onChange={(e) => setPrice(Number(e.target.value))}
                      w="60"
                      border="1px solid #CECECE"
                      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                    />
                  </Box>
                </HStack>

                <HStack spacing="5px">
                  <Box w="200px" h="full">
                    <Text fontSize="20px" fontWeight="semibold">
                      Stok
                    </Text>
                  </Box>
                  <Box w="full">
                    <Input
                      onChange={(e) => setStock(Number(e.target.value))}
                      w="40"
                      border="1px solid #CECECE"
                      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                    />
                  </Box>
                </HStack>

                <HStack spacing="5px">
                  <Box w="200px" h="full">
                    <Text fontSize="20px" fontWeight="semibold">
                      Merek
                    </Text>
                  </Box>
                  <Box w="full">
                    <Input
                      onChange={(e) => setBrand(e.target.value)}
                      w="50"
                      border="1px solid #CECECE"
                      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                    />
                  </Box>
                </HStack>

                <HStack spacing="5px">
                  <Box w="200px" h="full">
                    <Text fontSize="20px" fontWeight="semibold">
                      Kategori
                    </Text>
                  </Box>
                  <Box w="full">
                    <Input
                      onChange={(e) => setType(e.target.value)}
                      w="80"
                      border="1px solid #CECECE"
                      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                    />
                  </Box>
                </HStack>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <VStack w="full">
                <Button
                  fontSize="28px"
                  w="full"
                  bg="#57CAD5"
                  color="white"
                  borderRadius="10px"
                  type="submit"
                >
                  Add
                </Button>

                <Button
                  fontSize="28px"
                  w="full"
                  bg="#F24F8A"
                  color="white"
                  borderRadius="10px"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </VStack>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Stack>
  );
};

export default memo(ModalAddProduct);
