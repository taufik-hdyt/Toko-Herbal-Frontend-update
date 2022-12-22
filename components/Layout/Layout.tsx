import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { memo } from "react";
import Cart from "../Cart/Cart";
import CartItem from "../Cart/CartItem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { ILayoutProps } from "./Layout.types";

const Layout: React.FC<ILayoutProps> = ({
  children,
  onOpenModal,
  token,
}): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Grid
      templateAreas={`"header header cart1"
              "nav main cart2"
              "nav footer cart2"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"auto 1fr 400px"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      bg="blackAlpha.200"
    >
      <Header toggleOpenSideBar={onToggle} />
      <Cart />
      <CartItem />
      <Sidebar onOpenModal={onOpenModal} isOpenSideBar={isOpen} />
      <GridItem area={"main"} overflowY="auto">
        {children}
      </GridItem>

      <Footer token={token} />
    </Grid>
  );
};

export default memo(Layout);
