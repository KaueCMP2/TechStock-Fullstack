import { AlertCircleIcon, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import styles from '@/components/ItemProdutoAdmin/ItemProdutoAdmin.module.css'

const ItemProdutoAdmin = () => {
    return (
        <tr id={styles.item}>
            <td>GPU 3.0</td>
            <td>07/03/2001</td>
            <td>
                <Link href="/editar-produto"><Pencil /></Link>
                <button><Trash /></button>
                <Link href="/detalhes-produto"><AlertCircleIcon /></Link>
            </td>
        </tr>
    )
}

export default ItemProdutoAdmin