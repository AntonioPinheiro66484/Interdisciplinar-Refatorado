import React from 'react'
import styles from './Pedido.module.css'
import BotaoAdicionar from '../Botoes/BotãoAdicionar'
import BotaoComprar from '../Botoes/BotãoComprar'

const Pedido = () => {
  return (
    <div className={styles.pedido}>
      <div className={styles.tituloproduto}>O diário perdido de Gravity falls</div>
      <div className={styles.editora}>Universo dos Livros</div>
      <div className={styles.preco}>R$ 63,90</div>
      <div className={styles.botao}>
      <BotaoAdicionar/>
      <BotaoComprar/>
      </div>
      <div className={styles.localizacao}>Onde você está?</div>
      <div className={styles.localizacaodescricao}>Informe sua localização para calcularmos os valores de frete e localizarmos possíveis pontos de retirada.</div>
      <div className={styles.inputs}>
            <div className={styles.campoTextoEndereço}>
                <input className={styles.input} type="text" placeholder="Digite o seu CEP..."></input>
            </div>
        </div>
    </div>
  )
}

export default Pedido 