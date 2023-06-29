import * as S from "./style";
import Remove from "../../../assets/Remove.svg";
import { toast } from "react-toastify";
import { IProduct } from "../../../types/product";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { ButtonRemove } from "../../buttons/buttons";

export function CardCart({ element }: { element: IProduct }) {
  const { addCart, removeCart, decreaseAmount } = useContext(CartContext);

  return (
    <S.LiCart>
      <figure>
        <img src={element.img} alt="" />
      </figure>
      <div>
        <h4>{element.name}</h4>
      </div>
      <section>
        <button onClick={() => decreaseAmount(element, element.id)}>-</button>
        <span>{element.quant}</span>
        <button onClick={() => addCart(element, element.id)}>+</button>
      </section>

      <ButtonRemove
        onClick={() => {
          removeCart(element.id);
          toast.success("Item removido com sucesso");
        }}
      >
        <img src={Remove} alt="" />
      </ButtonRemove>
    </S.LiCart>
  );
}
