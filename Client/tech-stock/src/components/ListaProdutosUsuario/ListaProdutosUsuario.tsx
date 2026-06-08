import React from 'react'
import CardProdutoUsuario from '../CardProdutoUsuario/CardProdutoUsuario'
import styles from "@/components/ListaProdutosUsuario/ListaProdutosUsuario.module.css"
import InputPesquisa from '../InputPesquisa/InputPesquisa'
import BtnFiltro from '../BtnFiltro/BtnFiltro'


const ListaProdutosUsuario = () => {
    return (
        <main id={styles.main} className='layout-guid'>
            <div id={styles.container_pesquisa}>
                <InputPesquisa />
                <BtnFiltro />
            </div>
            <ul id={styles.container_lista}>
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
                <CardProdutoUsuario />
            </ul>
        </main>
    )
}

export default ListaProdutosUsuario