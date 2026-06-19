import styles from "@/pages/senha/senha.module.css"
import Link from "next/link";
import React from 'react'

const senha = () => {
    return (
        <main id={styles.main}>
            <section id={styles.section1}>
                <form action="" id={styles.form}>
                    <h2>Solicitar recuperação de senha</h2>
                    <div className={styles.input}>
                        <label htmlFor="mail">Email</label>
                        <input type="text" name="mail" placeholder="email@email.com" />
                    </div>
                    <button type="submit" className='button' onClick={(e) => {
                        e.preventDefault();
                    }}>Receber link</button>
                </form>
                <Link href="/login" id={styles.link}>Voltar para login</Link>
            </section>

            <section id={styles.section2}>
                <img src="../logo_escura.svg" alt="" />
                <img src="../foto_teclado.png" alt="" />
            </section>
        </main>
    )
}

export default senha