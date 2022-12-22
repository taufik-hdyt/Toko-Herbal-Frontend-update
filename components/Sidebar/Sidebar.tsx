import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  Link,
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
            <Link href="/">
              <Image src="/images/product.png" alt="product" />
            </Link>
          </Button>

          <Button bg="white">
            <Link href="/history">
              <Image src="/images/history.png" alt="history" />
            </Link>
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
