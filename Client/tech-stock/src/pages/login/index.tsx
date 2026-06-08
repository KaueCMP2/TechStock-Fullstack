import styles from "@/pages/login/login.module.css"
import Link from "next/link"

import React from 'react'

const loign = () => {
    return (
        <main id={styles.main}>
            <section id={styles.section1}>
                <img src="../logo_escura.svg" alt="" />
                <img src="../foto_computador.png" alt="" />
            </section>

            <section id={styles.section2}>
                <form action="" id={styles.form}>
                    <h2>Login</h2>
                    <div className={styles.input}>
                        <label htmlFor="mail">Email</label>
                        <input type="text" name="mail" placeholder="email@email.com" />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="mail">Senha</label>
                        <input type="password" name="pass" placeholder="********" />
                        <Link href="/senha" id={styles.link}>Esqueceu sua senha?</Link>
                    </div>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                    }}>Entrar</button>
                </form>
            </section>
        </main>
    )
}

export default loign