import React, { useState } from 'react'
import styles from "@/components/FormProduto/FormProduto.module.css"
import { Upload } from 'lucide-react'
import { cadastrarProdutos, editarProdutos } from '@/pages/api/produtoService'

interface ProdutoRecebido {
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
    imagem: File,
    descricao: string,
    preco: number,
    quantidade: number
}


const FormProduto = ({ produto }: { produto?: ProdutoRecebido }) => {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);

    const produtoAdicionado = {
        nome,
        imagem,
        descricao,
        preco,
        quantidade
    }

    return (
        <section id={styles.container_form} className='layout-guid'>
            <form id={styles.form} onSubmit={(e) => {
                e.preventDefault();

                if (produto == null)
                    cadastrarProdutos(produtoAdicionado)

                else
                    editarProdutos(String(produto.produtoId), produtoAdicionado!)

            }} >
                <div id={styles.content_form}>
                    <div id={styles.container_inputFile}>
                        <label htmlFor="upload-imagem">imagem:</label>
                        <label id={styles.inputFile} htmlFor="upload-imagem">
                            <Upload size={32} color="var(--azul-escuro" id={styles.icon} />
                            <input type="file" id="upload-imagem" onChange={(e) => setImagem(e.target.files![0])} />
                        </label>
                    </div>

                    <div id={styles.esquerda}>
                        <div className={styles.input1}>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name='name' placeholder='Digite o nome do produto' defaultValue={produto?.nome} onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className={styles.input2}>
                            <label htmlFor="value">Valor:</label>
                            <input type="text" inputMode='decimal' name='value' placeholder='12,00' defaultValue={produto?.preco} onChange={(e) => setPreco(Number(e.target.value))} />
                        </div>
                        <div className={styles.input2}>
                            <label htmlFor="quantity">Quantidade:</label>
                            <input type="number" name='quantity' placeholder='10' defaultValue={produto?.quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} />
                        </div>
                    </div>
                    <div id={styles.direita}>
                        <div className={styles.input3}>
                            <label htmlFor="desc">Descrição:</label>
                            <textarea name='desc' id={styles.textarea} placeholder='Descrição aqui...' defaultValue={produto?.descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </div>
                    </div>
                </div>
                <button className='button'>Salvar produto</button>
            </form>
        </section>
    )
}

export default FormProduto