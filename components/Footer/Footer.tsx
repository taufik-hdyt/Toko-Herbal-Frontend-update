import { GridItem } from "@chakra-ui/react";
import { memo } from "react";

const Footer: React.FC = (): JSX.Element => {
  return (
    <GridItem bg="white" area={"footer"} textAlign="center">
      Pagination
    </GridItem>
  );
};

export default memo(Footer);
