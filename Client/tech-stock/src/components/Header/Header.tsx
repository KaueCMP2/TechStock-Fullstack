import styles from '@/components/Header/Header.module.css'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header id={styles.header}>
            <main id={styles.content_header} className='layout-guid'>
                <img src="../logo_clara.svg" alt="Logotipo do tech stock site em escrito" id={styles.logo} />
                <Link href="/login" id={styles.link}>Entrar</Link>
            </main>
        </header>
    )
}

export default Header