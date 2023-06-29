import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { IProduct } from "../../../types/product.js";
import * as S from "./style";

export function Product({ element }: { element: IProduct }) {
  const { addCart } = useContext(CartContext);
  return (
    <S.Li>
      <figure>
        <img src={element.img} alt={element.name} />
      </figure>
      <div>
        <p className="titleCard">{element.name}</p>
        <span className="subTitleCard">{element.category}</span>
        <p className="priceCard">R$ {element.price}</p>
        <button
          onClick={() => addCart(element, element.id)}
          id={String(element.id)}
        >
          Adicionar
        </button>
      </div>
    </S.Li>
  );
}
