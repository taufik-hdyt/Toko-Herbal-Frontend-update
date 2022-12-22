import { StatHelpText } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";
import { totalmem } from "os";
import { IProduct } from "../../containers/Product/Product.types";

export interface ICartItem extends IProduct {
  qty: number;
}

interface IState {
  totalCart: number;
  cartItems: ICartItem[];
}

const initialState: IState = {
  totalCart: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    //=============menambah qty produk==========================
    incrementQty: (state, action) => {
      const add = state.cartItems.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            qty: e.qty + 1,
          };
        }
        return e;
      });
      state.cartItems = add;
    },

    //=============mengurangi qty produk=============================
    decrementQty: (state, action) => {
      const kurang = state.cartItems.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            qty: e.qty - 1,
          };
        }
        return e;
      });
      state.cartItems = kurang;
    },

    //=====Menambah Produk Ke keranjang===============
    addToCart: (state, action) => {
      const keranjang = state.cartItems.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            qty: e.qty + 1,
          };
        }
        return e;
      });

      if (
        state.cartItems.length === 0 ||
        state.cartItems.find((e) => e.id === action.payload.id) === undefined
      ) {
        keranjang.push({ ...action.payload, qty: 1 });
      }
      state.cartItems = keranjang;
    },
    //'=================menghapus dari keranjang==========================
    removeFromCard: (state, action) => {
      const remove = state.cartItems.filter((a) => a.id !== action.payload.id);
      state.cartItems = remove;
    },

    //=================menghapus semuaa product pada keranjang=====================
    clearCard: (state) => {
      state.cartItems = [];
      state.totalCart = 0;
    },
    //===============end===========================
  },
});

export const {
  incrementQty,
  addToCart,
  decrementQty,
  removeFromCard,
  clearCard,
} = cartSlice.actions;
export default cartSlice.reducer;
