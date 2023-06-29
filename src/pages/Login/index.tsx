import logo from "../../assets/MaskGroup.svg";
import shoppingBag from "../../assets/shopping-bag.svg";
import effectLogin from "../../assets/EffectLogin.svg";
import { ButtonLog } from "../../components/buttons/buttons";
import { Input } from "../../components/Input/input";
import * as S from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

type FormValues = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { handleUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <S.Main>
        <S.SectionForm>
          <form onSubmit={handleSubmit(handleUser)}>
            <label htmlFor="Login">
              <strong>Login</strong>
            </label>

            <Input type="text" id="Login" {...register("email")} />
            {errors.email?.message}

            <Input type="password" {...register("password")} />
            {errors.password?.message}
            <ButtonLog type="submit">Login</ButtonLog>
          </form>
          <div>
            <p>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </p>
            <Link to="/register">Cadastrar</Link>
          </div>
        </S.SectionForm>
        <S.SectionInfo>
          <div>
            <img src={logo} alt="" />
          </div>
          <S.DivInfo>
            <figure>
              <img src={shoppingBag} alt="" />
            </figure>
            <div>
              <p>
                A vida é como um sanduíche, é preciso recheá-la com os{" "}
                <strong>melhores</strong> ingredientes.
              </p>
            </div>
          </S.DivInfo>
          <figure>
            <img src={effectLogin} alt="" />
          </figure>
        </S.SectionInfo>
      </S.Main>
      <ToastContainer />
    </>
  );
};
