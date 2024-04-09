import styles from './Text.module.scss';
import table from '../../../image/Table.png'

export default function Text() {
    return (
        <div className={styles.Textcontainer}>
            <h3>
            Regulations
            </h3>
            <p>
            X POWER TRADE es el nombre comercial de Sanus Financial Services (PTY) Ltd, una empresa de servicios financieros sujeta a la regulación y supervisión de la Financial Sector Conduct Authority (FSCA) con número de registro 2020/659426/07, número FSP 51523 y fecha de autorización. 6/10/2021. Las oficinas de Sanus Financial Services (PTY) Ltd están ubicadas en 17 Midas Avenue, Olympus, Pretoria, Gauteng,0081 Sudáfrica. SANUS Financial Services (Pty) Ltd, EZInvest proporciona servicios únicamente de ejecución y celebra transacciones de principal a principal con sus clientes, según los precios que se muestran en la plataforma de negociación de EZInvest. Estas transacciones no se negocian en ninguna bolsa.
           
            </p>

            <img src={table} alt="Not found" />
        </div>
    )
}