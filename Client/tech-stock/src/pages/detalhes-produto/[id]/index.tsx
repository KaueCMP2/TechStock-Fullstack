import Header from '@/components/Header/Header'
import LinkVoltar from '@/components/LinkVoltar/LinkVoltar'
import { lerProdutoPorId } from '@/pages/api/produtoService'
import styles from '@/pages/detalhes-produto/[id]/detalhes.module.css'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


interface ProdutoRecebido {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
}

const detalhes = () => {
    const [produto, setProduto] = useState<ProdutoRecebido | null>(null)
    const router = useRouter();
    const { id } = router.query;

    const params = useSearchParams()
    const isAdmin = params.get("adm")


    useEffect(() => {
        if (!router.isReady || !id) return;

        
        async function carregarProduto() {
            const data = await lerProdutoPorId(Number(id))
            setProduto(data)
        }
        carregarProduto();
        
    }, [router.isReady, id])
    
    return (
        <>
            <Header />
            <main id={styles.main}>
                <div className='layout-guid'>
                    {isAdmin != "true" || isAdmin == null ? (<LinkVoltar pagina='/home' />) : (<LinkVoltar pagina='/home-adm' />)}
                </div>

                <section id={styles.detalhes} className='layout-guid'>
                    <div className={styles.lado1}>
                        <img src={produto?.imagemUrl} alt="" />
                        <div id={styles.baixo}>
                            <div className={styles.info_prod_quant}>
                                <h3>Valor:</h3>
                                <div id={styles.prod_valor}>
                                    <span>R$:</span>
                                    <span>{produto?.preco}</span>
                                </div>
                            </div>

                            <div>
                                <h3>Quantidade</h3>
                                <span>{produto?.quantidade} unidades</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lado2}>
                        <h1>{produto?.nome}</h1>
                        <p>{produto?.descricao}</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default detalhes