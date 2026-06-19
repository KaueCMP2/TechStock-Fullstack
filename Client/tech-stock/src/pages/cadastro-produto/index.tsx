import React from 'react'
import styles from "@/pages/cadastro-produto/cadastro.module.css"
import FormProduto from '@/components/FormProduto/FormProduto'
import LinkVoltar from '@/components/LinkVoltar/LinkVoltar'

const index = () => {
  return (
    <>
      <main id={styles.main}>
        <section id={styles.section}>
          <LinkVoltar pagina='/home-adm' />
          <h1>Cadastrar produtos</h1>
        </section>
        <FormProduto />
      </main>
    </>
  )
}

export default index