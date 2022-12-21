import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";

interface IProps {
  onOpenModal: () => void;
  isOpenSideBar: boolean;
}

const Sidebar: React.FC<IProps> = ({
  onOpenModal,
  isOpenSideBar,
}): JSX.Element => {
  return (
    <GridItem
      transition="0.3s"
      bg="white"
      area={"nav"}
      w={isOpenSideBar ? "250px" : "70px"}
    >
      <Flex>
        <VStack spacing="6" mt="8">
          <Button bg="white">
            <Image src="/images/product.png" alt="product" />
          </Button>

          <Button bg="white">
            <Image src="/images/history.png" alt="history" />
          </Button>

          <Button bg="white">
            <Image
              onClick={onOpenModal}
              src="/images/add.png"
              alt="addProduct"
            />
          </Button>
        </VStack>

        {isOpenSideBar === true && (
          <Flex ml="20px" mt="10">
            <VStack gap="32px">
              <Text>Semua Produk</Text>
              <Text>Laporan</Text>
              <Text>Tambah Produk</Text>
            </VStack>
          </Flex>
        )}
      </Flex>
    </GridItem>
  );
};

export default memo(Sidebar);
