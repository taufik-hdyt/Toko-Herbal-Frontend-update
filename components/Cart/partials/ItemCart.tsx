import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const ItemCart: React.FC = (): JSX.Element => {
  return (
    <HStack mt="2">
      <Image w="100px" src="/images/product1.jpg" alt="Product 1" />
      <Box flex="1">
        <Text>Nama Product</Text>
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
              0
            </Box>
            <Button
              w="30px"
              h="30px"
              border="1px solid #82DE3A"
              bg="rgba(130, 222, 58, 0.2)"
              color="#82DE3A"
              rounded="0"
              fontWeight="bold"
            >
              <AddIcon />
            </Button>
          </Flex>
          <Text>Rp. 15000</Text>
        </Flex>
      </Box>
    </HStack>
  );
};

export default memo(ItemCart);
