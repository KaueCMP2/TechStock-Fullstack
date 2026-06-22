import secureLocalStorage from "react-secure-storage";
import { api } from "./api"
import { erro, notificacao } from "@/utils/toasts";

export async function login(email: string, senha: string) {
    try {
        const response = await api.post("Autenticacao", { email, senha });
        const token = response.data.token;

        secureLocalStorage.setItem("Token", token)
    } catch (error: any) {
        erro("Email ou senha invalidos!!!")
    }
}