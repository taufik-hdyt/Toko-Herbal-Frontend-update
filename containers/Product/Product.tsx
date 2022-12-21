import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Children, memo, useEffect } from "react";
import ModalAddProduct from "../../components/Modals/ModalAddProduct";
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

  useEffect(() => {
    getListProduct();
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      onToggle();
    }
  }, [isOpenModal]);
  return (
    <Grid templateColumns="1fr 1fr 1fr 1fr" gap="4">
      {products?.map((product: any, index: number) => {
        return (
          <GridItem key={`produk-item-${index}`}>
            <Card p="2" cursor="pointer" w="full" h="full">
              <Image src="/images/product1.jpg" alt="cengplus" />
              <Text mt="2">{product.name}</Text>
              <Flex mt="2">
                <Box>{product.price}</Box>
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
