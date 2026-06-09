import React from 'react'
import styles from '@/components/ListaProdutosAdmin/ListaProdutosAdmin.module.css'
import { AlertCircleIcon, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import ItemProdutoAdmin from '../ItemProdutoAdmin/ItemProdutoAdmin'
import InputPesquisa from '../InputPesquisa/InputPesquisa'

const ListaProdutosAdmin = () => {
    return (
        <section id={styles.container_tabela}>
            <div id={styles.input_pesquisa}>
                <InputPesquisa />
                <Link href="/cadastro-produto" id={styles.link}>Novo produto</Link>
            </div>
            <table id={styles.table}>
                <thead id={styles.thead}>
                    <tr id={styles.tr}>
                        <th>Nome produto</th>
                        <th>Data criação</th>
                        <th>Modificações</th>
                    </tr>
                </thead>
                <tbody id={styles.tbody}>
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                    <ItemProdutoAdmin />
                </tbody>
            </table>
        </section>
    )
}

export default ListaProdutosAdmin