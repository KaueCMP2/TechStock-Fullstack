import React, { useEffect, useState } from 'react'
import styles from "@/pages/cadastro-produto/cadastro.module.css"
import FormProduto from '@/components/FormProduto/FormProduto'
import LinkVoltar from '@/components/LinkVoltar/LinkVoltar'
import { useRouter } from 'next/router'
import { lerProdutoPorId } from '@/pages/api/produtoService'

interface ProdutoRecebido {
  produtoId: number,
  nome: string,
  imagemUrl: string,
  descricao: string,
  dataCriacao: Date,
  preco: number,
  quantidade: number
}

const index = () => {
  const [produto, setProduto] = useState<ProdutoRecebido | null>(null)

  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    if (!router.isReady || !id) return;
    console.log(id)

    async function carregarProduto() {
      const data = await lerProdutoPorId(Number(id))
      setProduto(data)
    }
    carregarProduto();

  }, [router.isReady, id])


  return (
    <>
      <main id={styles.main}>
        <section id={styles.section}>
          <LinkVoltar pagina='/home-adm' />
          <h1>Editar produto</h1>
        </section>
        <FormProduto produto={produto!} />
      </main>
    </>
  )
}

export default index