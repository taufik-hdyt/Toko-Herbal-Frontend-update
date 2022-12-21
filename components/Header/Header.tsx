import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { memo } from "react";
interface IProps {
  toggleOpenSideBar: () => void;
}

const Header: React.FC<IProps> = ({ toggleOpenSideBar }): JSX.Element => {
  return (
    <GridItem area={"header"} bg="white" color="black">
      <HStack h="full" spacing="370px" w="full">
        <Button
          bg="white"
          _hover={{ bg: "blackAlpha.100" }}
          _active={{ bg: "white" }}
          onClick={toggleOpenSideBar}
        >
          <Image src="/images/menu.png" alt="menu" />
        </Button>

        <Heading as="h2" size="md">
          Toko Herbal
        </Heading>

        <SearchIcon />
      </HStack>
    </GridItem>
  );
};

export default memo(Header);
