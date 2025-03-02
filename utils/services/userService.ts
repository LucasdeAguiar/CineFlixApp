import axios from "axios";
import { API_URL } from "@env";

const api = axios.create({
  baseURL: API_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => {
  try {
    console.log("API_URL carregado:", API_URL);
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
    return null;
  }
};

export const registerUser = async (
  name: string,
  email: string,
  age: number,
  password: string
) => {
  console.log("API_URL carregado:", API_URL);

  try {
    const response = await api.post("/users", { name, email, age, password });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário", error);
    return null;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const users = await getUsers();
    if (!users) return null;

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );
    return user || null;
  } catch (error) {
    console.error("Erro ao fazer login", error);
    return null;
  }
};
