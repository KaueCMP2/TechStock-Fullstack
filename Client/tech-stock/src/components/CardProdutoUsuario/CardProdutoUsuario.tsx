import React from 'react'
import styles from '@/components/CardProdutoUsuario/CardProdutoUsuario.module.css'
import Link from 'next/link'


interface ProdutoRecebido {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
}
const CardProdutoUsuario = (produto: ProdutoRecebido) => {
    return (
        <li id={styles.container_card}>
            <Link href={`/detalhes-produto/${produto.produtoId}`}>
                <img src={produto.imagemUrl} alt="" />
                <h3>{produto.nome}</h3>
                <span>R$</span>
                <span id={styles.valor}>{produto.preco}</span>
            </Link>
        </li>
    )
}

export default CardProdutoUsuario