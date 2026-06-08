import Header from '@/components/Header/Header'
import LinkVoltar from '@/components/LinkVoltar/LinkVoltar'
import styles from '@/pages/detalhes-produto/detalhes.module.css'
import React from 'react'

const detalhes = () => {
    return (
        <>
            <Header />
            <main id={styles.main}>
                <div className='layout-guid'>
                    <LinkVoltar />
                </div>

                <section id={styles.detalhes} className='layout-guid'>
                    <div className={styles.lado1}>
                        <img src="../gpu_img.png" alt="" />
                        <div id={styles.baixo}>
                            <div className={styles.info_prod_quant}>
                                <h3>Valor:</h3>
                                <div id={styles.prod_valor}>
                                    <span>R$:</span>
                                    <span>999.999,00</span>
                                </div>
                            </div>

                            <div>
                                <h3>Quantidade</h3>
                                <span>21 unidades</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lado2}>
                        <h1>GPU 3.0</h1>
                        <p>Aqui nos teriamos a descrição do produto.
                            Poderiamos saber se ele é ruim ou bom.
                            Queremos comer, mas não temos DinDin.</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default detalhes