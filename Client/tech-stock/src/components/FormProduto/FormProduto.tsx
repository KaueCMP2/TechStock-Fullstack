import React from 'react'
import styles from "@/components/FormProduto/FormProduto.module.css"

const FormProduto = () => {
    return (
        <section id={styles.container_form} className='layout-guid'>
            <form id={styles.form} >
                <div id={styles.content_form}>
                    <div id={styles.esquerda}>
                        <div className={styles.input1}>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name='name' placeholder='Digite o nome do produto' />
                        </div>
                        <div className={styles.input2}>
                            <label htmlFor="value">Valor:</label>
                            <input type="text" inputMode='decimal' name='value' placeholder='12,00' />
                        </div>
                        <div className={styles.input2}>
                            <label htmlFor="quantity">Quantidade:</label>
                            <input type="number" name='quantity' placeholder='10' />
                        </div>
                    </div>
                    <div id={styles.direita}>
                        <div className={styles.input3}>
                            <label htmlFor="desc">Descrição:</label>
                            <textarea name='desc' id={styles.textarea} placeholder='Descrição aqui...' />
                        </div>
                    </div>
                </div>
                <button className='button'>Salvar produto</button>
            </form>
        </section>
    )
}

export default FormProduto