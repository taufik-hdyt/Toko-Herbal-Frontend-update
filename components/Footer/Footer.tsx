import { GridItem } from "@chakra-ui/react";
import { memo } from "react";
import { useProductAction } from "../../containers/Product/Production.action";
import Pagination from "../Pagination";
interface IProps {
  token: string;
}

const Footer: React.FC<IProps> = ({ token }): JSX.Element => {
  const { getListProduct, meta } = useProductAction(token);
  console.log(meta);
  const handlePageClick = (p: number) => {
    getListProduct(p);
  };
  return (
    <GridItem bg="white" area={"footer"}>
      <Pagination
        onChange={handlePageClick}
        pageSize={meta?.limit ?? 0}
        current={meta?.page ?? 0}
        total={meta?.totalData ?? 0}
      />
    </GridItem>
  );
};

export default memo(Footer);
