import * as S from "./style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/MaskGroup.svg";
import logout from "../../assets/Logout.svg";
import cart from "../../assets/Cart.svg";
import search from "../../assets/Search.svg";
import { ProductsList } from "../../components/ProductsList";
import { api } from "../../services/api";
import { IProduct } from "../../types/product";
import { ModalCart } from "../../components/Modal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Container } from "../../style/Global";

const DashboardPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [modalCart, setModalCart] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  function Logout() {
    window.localStorage.clear();
    navigate("/");
  }
  useEffect(() => {
    async function GetProducts() {
      const token = localStorage.getItem("authToken");
      try {
        const { data } = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    GetProducts();
  }, []);

  const RandonModalCart = () => {
    setModalCart((oldState) => !oldState);
  };

  function searchFilter(event: any, products: IProduct[]) {
    const valueInput = event.target.querySelector("#filter").value;
    setFilteredProducts(
      products.filter((item) => {
        if (!valueInput) {
          return item;
        } else {
          return item.name.toLowerCase().includes(valueInput.toLowerCase());
        }
      })
    );
  }

  return (
    <>
      <S.Header>
        <div className="DivGlobal">
          <img src={logo} alt="" />
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                searchFilter(event, products);
              }}
            >
              <input id="filter" type="text" placeholder="Digitar Pesquisa" />

              <button type="submit">
                <img src={search} alt="" />
              </button>
            </form>
            <button onClick={RandonModalCart}>
              <img src={cart} alt="" />
            </button>
            <button onClick={Logout}>
              <img src={logout} alt="" />
            </button>
          </div>
        </div>
      </S.Header>
      <main>
        <Container>
          <section>
            <ProductsList
              products={products}
              filteredProducts={filteredProducts}
            />
          </section>
          {modalCart ? <ModalCart RandonModalCart={RandonModalCart} /> : null}
          <ToastContainer />
        </Container>
      </main>
    </>
  );
};

export default DashboardPage;
