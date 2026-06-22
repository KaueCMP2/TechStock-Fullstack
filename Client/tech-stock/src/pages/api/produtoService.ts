import { AnyRecordWithTtl } from "dns";
import { api } from "./api";
import { erro, toastConfirmarExclusao } from "@/utils/toasts";

interface ProdutoListagem {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
}

type ProdutoFormulario = {
    nome: string,
    imagem: File | null,
    descricao: string,
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
        return produtos
    } catch (error: any) {
        erro(error.response.data)
    }
}

export async function lerProdutoPorId(id: number) {
    try {
        const response = await api.get("Produto/" + id);
        const produtos = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };
        return produtos
    } catch (error: any) {
        erro(error.response.data)
    }
}

export async function cadastrarProdutos(produto: ProdutoFormulario) {
    try {
        const formData = new FormData();
        formData.append("nome", produto.nome);
        formData.append("descricao", produto.descricao);
        formData.append("imagem", produto.imagem!);
        formData.append("preco", String(produto.preco));
        formData.append("quantidade", String(produto.quantidade));

        const response = await api.post("Produto", formData);
        return response.data;
    } catch (erro: any) {
        throw new Error(erro.response.data);
    }
}

export async function editarProdutos(id: string, produto: ProdutoFormulario) {
    try {
        const formData = new FormData();
        formData.append("nome", produto.nome);
        formData.append("descricao", produto.descricao);
        formData.append("imagem", produto.imagem!);
        formData.append("preco", String(produto.preco));
        formData.append("quantidade", String(produto.quantidade));

        const response = await api.put(`Produto/${id}`, formData);
        return response.data;
    } catch (erro: any) {
        throw new Error(erro.response.data);
    }
}

export async function deletarProduto(id: number) {
    try {
        if (id || id > 0)
            await api.delete("Produto/" + id);
    }
    catch (error: any) {
        erro(error.response.data)
    }
}