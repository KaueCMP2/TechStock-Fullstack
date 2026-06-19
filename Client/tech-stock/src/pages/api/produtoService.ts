import { AnyRecordWithTtl } from "dns";
import { api } from "./api";
import { toastConfirmarExclusao } from "@/utils/toasts";

interface ProdutoListagem {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
}

export async function lerProdutos() {
    try {
        const response = await api.get("Produto");
        const produtos = response.data.map((produto: ProdutoListagem) => ({
            ...produto,
            imagemUrl: `${api.defaults.baseURL}${produto.imagemUrl}`
        }));
        console.log(JSON.stringify(produtos))
        return produtos
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function lerProdutoPorId(id: number) {
    try {
        const response = await api.get("Produto/" + id);
        console.log(JSON.stringify(response.data))
        const produtos = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };
        console.log(JSON.stringify(produtos))
        return produtos
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function deletarProduto(id: number) {
    try {
        if (id || id > 0)
            await api.delete("Produto/" + id);
    }
    catch (error: any) {

        console.log(error.response);

        console.log(error.response?.data);

        console.log(error.response?.status);

        throw new Error(
            error.response?.data?.title ||
            error.response?.data ||
            error.message ||
            "Erro ao deletar jogo"
        );
    }
}