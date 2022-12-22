import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { memo, useEffect } from "react";
import ModalAddProduct from "../../components/Modals/ModalAddProduct";
import Pagination from "../../components/Pagination";
import { useAppDispatch } from "../../hooks/hooks";
import { addToCart } from "../../redux/slices/cart.slices";
import { useProductAction } from "./Production.action";

interface IProps {
  isOpenModal: boolean;
  token: string;
}

const Product: React.FC<IProps> = ({ isOpenModal, token }): JSX.Element => {
  const {
    isOpen,
    onToggle,
    onClose,
    getListProduct,
    meta,
    products,
    addProduct,
  } = useProductAction(token);
  console.log(meta);

  const dispath = useAppDispatch();
  const handlePageClick = (p: number) => {
    getListProduct(p);
  };

  useEffect(() => {
    getListProduct();
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      onToggle();
    }
  }, [isOpenModal]);
  return (
    <Grid templateColumns="1fr 1fr 1fr 1fr" gap="2" h="full">
      {products?.map((product: any, index: number) => {
        return (
          <GridItem key={`produk-item-${index}`}>
            <Card
              p="2"
              w="full"
              h="full"
              cursor="pointer"
              onClick={() => dispath(addToCart(product))}
            >
              <Image src="/images/product1.jpg" alt="cengplus" />
              <Text mt="2">{product.name}</Text>
              <Flex>
                <Box>Rp.{product.price}</Box>
                <Spacer />
                <Box>{product.stock}</Box>
              </Flex>
            </Card>
          </GridItem>
        );
      })}

      <ModalAddProduct
        addProduct={addProduct}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Grid>
  );
};

export default memo(Product);
