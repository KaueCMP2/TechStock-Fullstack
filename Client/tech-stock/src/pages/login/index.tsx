import styles from "@/pages/login/login.module.css"
import Link from "next/link"

import React, { useState } from 'react'
import { login } from "../api/autenticacaoService"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const loign = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const router = useRouter();
    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha)
            notificacao("Login bem sucedido");

            setTimeout(() => {
                router.push("/home-adm");
            }, 2000)
        } catch (error: any) {
            erro(error.message);
        }
    }

    return (
        <main id={styles.main}>
            <section id={styles.section1}>
                <img src="../logo_escura.svg" alt="" />
                <img src="../foto_computador.png" alt="" />
            </section>

            <section id={styles.section2}>
                <form action="" id={styles.form} onSubmit={(e) => {
                    autenticar(e);
                }}>
                    <h2>Login</h2>
                    <div className={styles.input}>
                        <label htmlFor="mail">Email</label>
                        <input type="text" name="mail" placeholder="email@email.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="mail">Senha</label>
                        <input type="password" name="pass" placeholder="********" onChange={(e) => setSenha(e.target.value)} />
                        <Link href="/senha" id={styles.link}>Esqueceu sua senha?</Link>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </section>
        </main >
    )
}

export default loign