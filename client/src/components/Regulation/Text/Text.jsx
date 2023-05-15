import styles from './Text.module.scss';
import table from '../../../image/Table.png'

export default function Text() {
    return (
        <div className={styles.Textcontainer}>
            <h3>
            Regulations
            </h3>
            <p>
            World.EzInvest is the trading name of Sanus Financial Services (PTY) Ltd, a financial services company subject to the regulation and supervision of the Financial Sector Conduct Authority (FSCA) with registration number 2020/659426/07, FSP number 51523 and authorization date 10/6/2021. The offices of Sanus Financial Services (PTY) Ltd are located at 17 Midas Avenue, Olympus, Pretoria, Gauteng,0081 South Africa.
            </p>
            <p>
            SANUS Financial Services (Pty) Ltd, EZInvest provides execution only services and enters into principal to principal transactions with its clients, on prices shown on the EZInvest trading platform. These transactions are not traded on any exchange.
            </p>

            <img src={table} alt="Not found" />
        </div>
    )
}