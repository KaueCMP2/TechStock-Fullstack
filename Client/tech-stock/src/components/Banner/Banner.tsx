import styles from '@/components/Banner/Banner.module.css'
import React from 'react'

const Banner = () => {
    return (
        <section id={styles.banner} className='layout-guid'>
            <img src="../logo_clara.svg" alt="Logotipo do tech stock site em escrito" />
        </section>
    )
}

export default Banner
