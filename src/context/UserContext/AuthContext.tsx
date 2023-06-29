import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IAuthContext,
  IAuthProviderProps,
  UserResponse,
  LoginUser,
  ILoginResponse,
} from "../../types/InterfacesAuthContext";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserAuth(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function handleUser(user: LoginUser | null) {
    try {
      const response = await api.post<ILoginResponse>("/login ", user);

      const { user: userResponse } = response.data;
      setUserAuth(userResponse);

      window.localStorage.clear();
      window.localStorage.setItem("authToken", response.data.accessToken);

      toast.success("Login realizado com sucesso");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  return (
    <AuthContext.Provider value={{ handleUser, userAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
