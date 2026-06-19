import { AlertCircleIcon, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import styles from '@/components/ItemProdutoAdmin/ItemProdutoAdmin.module.css'
import { deletarProduto } from '@/pages/api/produtoService'
import { notificacao, toastConfirmarExclusao } from '@/utils/toasts'

interface ProdutoRecebido {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
    onDelete: (produtoId: number) => void
}

const ItemProdutoAdmin = (produto: ProdutoRecebido) => {


    return (
        <tr id={styles.item}>
            <td>{produto.nome}</td>
            <td>{String(produto.dataCriacao)}</td>
            <td>{produto.quantidade} Unidade(s)</td>
            <td id={styles.container_buttons}>
                <Link href={`/editar-produto/${produto.produtoId}`} className={styles.act_td1}><Pencil /></Link>
                <button onClick={(e) => {
                    e.preventDefault();
                    produto.onDelete(produto.produtoId);
                }}><Trash /></button>
                <Link href={`/detalhes-produto/${produto.produtoId}?adm=true`} className={styles.act_td3}><AlertCircleIcon /></Link>
            </td>
        </tr>
    )
}

export default ItemProdutoAdmin