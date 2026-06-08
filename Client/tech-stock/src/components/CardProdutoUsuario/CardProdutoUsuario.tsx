import React from 'react'
import styles from '@/components/CardProdutoUsuario/CardProdutoUsuario.module.css'
import Link from 'next/link'

const CardProdutoUsuario = () => {
    return (
        <li id={styles.container_card}>
            <Link href="/detalhes-produto">
                <img src="../gpu_img.png" alt="" />
                <h3>GPU 3.0</h3>
                <span>R$</span>
                <span id={styles.valor}>999.999,00</span>
            </Link>
        </li>
    )
}

export default CardProdutoUsuario