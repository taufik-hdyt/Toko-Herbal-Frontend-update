import { GridItem } from "@chakra-ui/react";
import { memo } from "react";
import { useProductAction } from "../../containers/Product/Production.action";
import Pagination from "../Pagination";
interface IProps {
  token: string;
}

const Footer: React.FC<IProps> = ({ token }): JSX.Element => {
  return (
    <GridItem bg="white" area={"footer"}>
      Paginatiion
    </GridItem>
  );
};

export default memo(Footer);
