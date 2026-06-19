import React from 'react'
import styles from '@/components/InputPesquisa/InputPesquisa.module.css'

interface inputProps {
  valor: string;
  onChange: (novoValor: string) => void
}

const InputPesquisa = ({ valor, onChange }: inputProps) => {
  return (
    <input
      type='text'
      id={styles.input_pesquisa}
      placeholder='Busque um produto'
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default InputPesquisa