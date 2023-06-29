import { IProduct } from "../../types/product";
import { Product } from "./Product";
import * as S from "./style";

interface IProductsListProps {
  products: IProduct[];
  filteredProducts: IProduct[];
}

export function ProductsList({
  products,
  filteredProducts,
}: IProductsListProps) {
  return (
    <S.DivGlobalUl>
      {filteredProducts.length > 0 ? (
        <S.Ul>
          {filteredProducts.map((element) => (
            <Product key={element.id} element={element} />
          ))}
        </S.Ul>
      ) : (
        <S.Ul>
          {products.map((element) => (
            <Product key={element.id} element={element} />
          ))}
        </S.Ul>
      )}
    </S.DivGlobalUl>
  );
}
