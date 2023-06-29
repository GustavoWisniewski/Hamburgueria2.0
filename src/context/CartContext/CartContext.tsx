/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { ICartProviderProps } from "../../types/interfacesCartContext";
import { IProduct } from "../../types/product";

interface ICartContext {
  addCart: (element: IProduct, elementID: number) => void;
  removeCart: (elementID: number) => void;
  decreaseAmount: (element: IProduct, elementID: number) => void;
  carts: IProduct[];
  TotalCard: () => string | 0;
  RemoveAll: () => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: ICartProviderProps) {
  const [carts, setCarts] = useState<IProduct[]>([] as IProduct[]);

  const addCart = (element: IProduct, elementID: number) => {
    const productFound = carts.find((elem) => elem.id === elementID);

    if (productFound) {
      const index = carts.findIndex((produtc) => produtc.id === elementID);
      const produtcOnCart = carts.splice(index, 1);
      produtcOnCart[0].quant! += 1;

      setCarts([...carts, produtcOnCart[0]]);
    } else {
      element.quant = 1;
      setCarts((previousProduct) => [...previousProduct, element]);
      toast.success("Produto adicionado ao carrinho");
    }
  };

  const removeCart = (elementID: number) => {
    const index = carts.findIndex((produtc) => produtc.id === elementID);

    if (index >= 0) {
      const newCarts = [...carts];
      newCarts.splice(index, 1);
      setCarts(newCarts);
    }
  };

  const decreaseAmount = (element: IProduct, elementID: number) => {
    const productFound = carts.find((elem) => elem.id === elementID);

    if (productFound?.quant! >= 2) {
      const index = carts.findIndex((produtc) => produtc.id === elementID);
      const produtcOnCart = carts.splice(index, 1);
      produtcOnCart[0].quant! -= 1;

      setCarts([...carts, produtcOnCart[0]]);
    } else {
      const index = carts.findIndex((produtc) => produtc.id === elementID);
      carts.splice(index, 1);
      setCarts([...carts]);
      toast.success("item removido com sucesso");
    }
  };

  const RemoveAll = () => {
    setCarts([]);
  };

  const TotalCard = () => {
    if (carts.length === 0) {
      return 0;
    }
    const [TotalPrices, setTotalPrices] = useState<number>(0);

    useEffect(() => {
      const prices = carts.map((element) => {
        if (element.quant) {
          return element.price * element.quant;
        } else {
          return element.price;
        }
      });
      const totalPrices = prices.reduce((prev, curr) => prev + curr, 0);
      setTotalPrices(totalPrices);
    }, [carts]);

    return TotalPrices.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        addCart,
        removeCart,
        decreaseAmount,
        carts,
        TotalCard,
        RemoveAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
