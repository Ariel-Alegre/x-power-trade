import { useState } from 'react'
import styles from './Identify.module.css'


export default function Identify() {

    const [identify, setIdentify] = useState({
        account: "",
        divisa: ""

    });

    const handlechange = (e) => {

        e.preventDefault()
        setIdentify({
            ...identify,
            account: e.target.value
        })
    }
    return (
        <div className={styles.selectContainer}>
            <div className={styles.numberAccount}>
                    <p className={styles.account}>Número de la cue...</p>
                    <p className={styles.number}>1303473995</p>
            </div>
            <div className={styles.divisa}>
                    <p className={styles.account}>Divisa</p>
                    <p className={styles.number}>USD</p>
            </div>
            <div className={styles.type}>
                    <p className={styles.account}>Tipo</p>
                    <p className={styles.number}>Real</p>
            </div>
           
          <select name="" id="">
            <option value="">asdsad</option>
            <option value="">dwqw</option>
          </select>
     
        </div>
    )
}