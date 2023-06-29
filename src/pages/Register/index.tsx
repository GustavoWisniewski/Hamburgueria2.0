import * as S from "./style";
import logo from "../../assets/MaskGroup.svg";
import shoppingBag from "../../assets/shopping-bag.svg";
import effectLogin from "../../assets/EffectLogin.svg";
import { Input } from "../../components/Input/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ButtonCad } from "../../components/buttons/buttons";
import { ILoginResponse } from "../../types/InterfacesAuthContext";
import { Link } from "react-router-dom";

type FormValues = {
  email: string;
  name: string;
  password: string;
  passwordConfirm?: string;
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    passwordConfirm: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas não correspondem"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data: FormValues) {
    try {
      const response = await api.post<ILoginResponse>("/users", data);
      toast.success("Usuario cadastrado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  return (
    <>
      <S.Main>
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
        <S.SectionForm>
          <div>
            <h2>Cadastrar</h2>
            <Link to="/">Retornar para o login</Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nameUser">Nome</label>
            <Input
              type="text"
              id="nameUser"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name?.message}

            <label htmlFor="emailUser">Email</label>
            <Input
              type="email"
              id="emailUser"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email?.message}

            <label htmlFor="passwordUser">Senha</label>
            <Input
              type="password"
              id="passwordUser"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password?.message}

            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <Input
              type="password"
              id="passwordConfirm"
              placeholder="Confirme sua senha"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message}

            <ButtonCad type="submit">Cadastrar</ButtonCad>
          </form>
        </S.SectionForm>
        <ToastContainer />
      </S.Main>
    </>
  );
};

export default RegisterPage;
