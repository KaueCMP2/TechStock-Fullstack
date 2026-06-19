import React, { useEffect, useState } from 'react'
import CardProdutoUsuario from '../CardProdutoUsuario/CardProdutoUsuario'
import styles from "@/components/ListaProdutosUsuario/ListaProdutosUsuario.module.css"
import InputPesquisa from '../InputPesquisa/InputPesquisa'
import BtnFiltro from '../BtnFiltro/BtnFiltro'
import { lerProdutos } from '@/pages/api/produtoService'


interface ProdutoRecebido {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
}
const ListaProdutosUsuario = () => {
    const [produtos, setProdutos] = useState<ProdutoRecebido[]>([])
    const [digitado, setDigitado] = useState("")

    async function carregarProdutos() {
        const data = await lerProdutos();
        setProdutos(data!)
    }

    const filtrados = produtos.filter(item =>
        item.nome.toLowerCase().includes(digitado.toLowerCase())
    )

    useEffect(() => {
        carregarProdutos();
    }, [])

    return (
        <main id={styles.main} className='layout-guid'>
            <div id={styles.container_pesquisa}>
                <InputPesquisa valor={digitado} onChange={setDigitado} />
                <BtnFiltro />
            </div>
            <ul id={styles.container_lista}>
                {
                    filtrados.length < 0 ? (<li>---Nenhum produto---</li>)
                        : filtrados.map((produto) => (<CardProdutoUsuario
                            key={produto.produtoId}
                            produtoId={produto.produtoId}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            dataCriacao={produto.dataCriacao}
                            imagemUrl={produto.imagemUrl}
                            preco={produto.preco}
                            quantidade={produto.quantidade}
                        />))
                }
            </ul>
        </main>
    )
}

export default ListaProdutosUsuario