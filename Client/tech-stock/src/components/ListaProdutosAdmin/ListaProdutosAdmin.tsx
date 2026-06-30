import React, { useEffect, useState } from 'react'
import styles from '@/components/ListaProdutosAdmin/ListaProdutosAdmin.module.css'
import { AlertCircleIcon, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import ItemProdutoAdmin from '../ItemProdutoAdmin/ItemProdutoAdmin'
import InputPesquisa from '../InputPesquisa/InputPesquisa'
import { erro, notificacao, toastConfirmarExclusao } from '@/utils/toasts'
import { deletarProduto } from '@/pages/api/produtoService'
import BtnFiltro from '../BtnFiltro/BtnFiltro'
import { projectUpdateInfoSubscribe } from 'next/dist/build/swc/generated-native'

interface ProdutoRecebido {
    produtoId: number,
    nome: string,
    imagemUrl: string,
    descricao: string,
    dataCriacao: Date,
    preco: number,
    quantidade: number
}

const ListaProdutosAdmin = ({ produtos }: { produtos: ProdutoRecebido[] }) => {
    const [listaProdutos, setListaProdutos] = useState(produtos);
    const [digitado, setDigitado] = useState("")

    useEffect(() => {
        if (produtos)
            setListaProdutos(produtos);
    }, [produtos])

    function excluir(produtoId: number) {
        toastConfirmarExclusao(async () => {
            try {
                await deletarProduto(produtoId)
                notificacao(`Produto excluido com sucesso!`)
                listaProdutos.filter((e) => e.produtoId == produtoId);
                setFiltrados(produtos);
            } catch (error: any) {
                erro("Erro ao excluir produto!!!");
            }
        })
    }

    const [filtrados, setFiltrados] = useState(listaProdutos);

    useEffect(() => {
        setFiltrados(listaProdutos.filter((produto) => produto.nome.toLowerCase()
            .includes(digitado.toLowerCase())));
    }, [digitado, listaProdutos])

    return (
        <section id={styles.container_tabela}>
            <div id={styles.input_pesquisa}>
                <div id={styles.container_pesquisa}>
                    <InputPesquisa valor={digitado} onChange={setDigitado} />
                    <BtnFiltro />
                </div>
                <Link href="/cadastro-produto" id={styles.link}>Novo produto</Link>
            </div>
            {filtrados.length <= 0 ? (<h3>Nenhum item encontrado</h3>) :
                (

                    <table id={styles.table}>
                        <thead id={styles.thead}>
                            <tr id={styles.tr}>
                                <th>Nome produto</th>
                                <th>Data criação</th>
                                <th>quantidade</th>
                                <th>Modificações</th>
                            </tr>
                        </thead>
                        <tbody id={styles.tbody}>
                            {filtrados.map((produto) => (<ItemProdutoAdmin key={produto.produtoId}
                                produtoId={produto.produtoId}
                                nome={produto.nome}
                                descricao={produto.descricao}
                                dataCriacao={produto.dataCriacao}
                                imagemUrl={produto.imagemUrl}
                                preco={produto.preco}
                                quantidade={produto.quantidade}
                                onDelete={excluir}
                            />))
                            }

                        </tbody>
                    </table>
                )}
        </section>
    )
}

export default ListaProdutosAdmin