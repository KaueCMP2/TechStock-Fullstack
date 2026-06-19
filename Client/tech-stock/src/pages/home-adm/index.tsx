import React, { useEffect, useState } from 'react'
import styles from '@/pages/home-adm/homeAdmin.module.css'
import ListaProdutosAdmin from '@/components/ListaProdutosAdmin/ListaProdutosAdmin'
import { lerProdutos } from '../api/produtoService'

interface ProdutoRecebido {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
}

const index = () => {
    const [produtos, setProdutos] = useState<ProdutoRecebido[]>([]);

    useEffect(() => {
        async function carregarProdutos() {
            const data = await lerProdutos();
            setProdutos(data);
        }

        carregarProdutos();
    }, [])

    return (
        <main id={styles.main}>
            <h1>Lista de produtos</h1>
            <ListaProdutosAdmin produtos={produtos}/>
        </main>
    )
}

export default index