import secureLocalStorage from "react-secure-storage";
import { api } from "./api"

export async function login(email: string, senha: string) {
    try {
        const response = await api.post("Autenticacao", { email, senha });
        const token = response.data.token;

        console.log(response.data)
        secureLocalStorage.setItem("Token", token)
    } catch (error: any) {
        throw new Error("Email ou senha invalidos!!!")
    }
}