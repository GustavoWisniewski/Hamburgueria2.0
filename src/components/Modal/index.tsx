import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { CardCart } from "./CartCardModal";
import * as S from "./style";

interface IPropsModal {
  RandonModalCart: () => void;
}
export function ModalCart({ RandonModalCart }: IPropsModal) {
  const { carts, TotalCard, RemoveAll } = useContext(CartContext);

  console.log(TotalCard());
  return (
    <>
      <S.DivModal>
        <div>
          <h3>Carrinho de Compras</h3>
          <button onClick={RandonModalCart}>X</button>
        </div>
        {carts.length === 0 ? (
          <S.UlCart>
            <S.LiEmpty>
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </S.LiEmpty>
          </S.UlCart>
        ) : (
          <>
            <S.UlCart>
              {carts.map((element) => (
                <CardCart key={element.id} element={element} />
              ))}

              <S.DivTotal>
                <div>
                  <h2>Total</h2>
                  <span>{TotalCard()}</span>
                </div>
                <button onClick={RemoveAll}>Remover todos</button>
              </S.DivTotal>
            </S.UlCart>
          </>
        )}
      </S.DivModal>
    </>
  );
}
