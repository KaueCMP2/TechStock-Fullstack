import React from 'react'
import styles from '@/pages/home-adm/homeAdmin.module.css'
import ListaProdutosAdmin from '@/components/ListaProdutosAdmin/ListaProdutosAdmin'

const index = () => {
    return (
            <main id={styles.main}>
                <h1>Lista de produtos</h1>
                <ListaProdutosAdmin />
            </main>
    )
}

export default index