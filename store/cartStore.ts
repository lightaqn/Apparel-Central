import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ICartProps {
  products?: string[];
  quantity?: number;

  addProduct?: (product: any) => void;
  removeProduct?: ({ i }: any) => void;
  incrementQty?: ({ i }: any) => void;
  decrementQty?: ({ i }: any) => void;
}

const useCartStore = create(
  persist<ICartProps | any>(
    (set) => ({
      products: [], // Array of products
      quantity: 0, // Total quantity in the cart
      addProduct: (product: any) =>
        set((state: any) => ({
          products: [...state.products, product],
          quantity: state.quantity++,
        })),
      removeProduct: ({ i }: any) =>
        set((state: any) => {
          const updatedProducts = state.products.filter(
            (product: any) => product.id !== i
          );
          return {
            products: updatedProducts,
            quantity: state.quantity--,
          };
        }),
      incrementQty: ({ i }: any) =>
        set((state: any) => ({
          products: state.products.map((product: any) =>
            product.id === i
              ? { ...product, quantity: product.quantity++ }
              : product
          ),
          quantity: state.quantity++,
        })),

      decrementQty: ({ i }: any) =>
        set((state: any) => {
          const updatedProducts = state.products.map((product: any) =>
            product.id === i
              ? { ...product, quantity: product.quantity-- }
              : product
          );
          return {
            products: updatedProducts,
            quantity: state.quantity--,
          };
        }),
    }),
    {
      name: "cartStore", // Local storage key
    }
  )
);

export default useCartStore;
