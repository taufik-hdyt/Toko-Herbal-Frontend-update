import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { ICreateProduct, IProduct } from "./Product.types";
import callApi from "../../utils/fetcher";

export const useProductAction = (token?: string) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [meta, setMeta] = useState<any | null>(null);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getListProduct = (p?: number) => {
    callApi({
      ctx: {},
      uri: "/product",
      method: "GET",
      params: { page: p ?? 1, limit: 8, search: "" },
    })
      .then(function (response) {
        console.log(response);
        setProducts(response.data.data);
        setMeta(response.data.meta);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addProduct = (data: ICreateProduct) => {
    callApi({
      ctx: {},
      uri: "/product/createproduct",
      method: "POST",
      params: data,
    })
      .then(function (response) {
        console.log(response);
        getListProduct();
        onClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    isOpen,
    onToggle,
    onClose,
    getListProduct,
    addProduct,
    products,
    meta,
  };
};
