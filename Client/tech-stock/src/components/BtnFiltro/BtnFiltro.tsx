import styles from '@/components/BtnFiltro/BtnFiltro.module.css'
import { ListFilterIcon } from 'lucide-react'
import React from 'react'

const BtnFiltro = () => {
    return (
        <button id={styles.btn_filtro}><ListFilterIcon /></button>
    )
}

export default BtnFiltro