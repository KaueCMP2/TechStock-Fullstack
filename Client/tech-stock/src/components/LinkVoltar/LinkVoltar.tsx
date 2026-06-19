import styles from "@/components/LinkVoltar/LinkVoltar.module.css"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from 'react'

const LinkVoltar = ({ pagina }: { pagina: string }) => {
    return <Link href={pagina} id={styles.voltarLink}><img src="../voltar_link.png" alt="seta e link para voltar a pagina anterior" /></Link>
}

export default LinkVoltar