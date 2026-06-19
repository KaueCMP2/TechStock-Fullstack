import React from 'react'
import styles from "@/pages/cadastro-produto/cadastro.module.css"
import FormProduto from '@/components/FormProduto/FormProduto'
import LinkVoltar from '@/components/LinkVoltar/LinkVoltar'

const index = () => {
  return (
    <>
      <LinkVoltar pagina='/home-adm'/>
      <FormProduto />
    </>
  )
}

export default index