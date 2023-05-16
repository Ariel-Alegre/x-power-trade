import styles from './Tables.module.scss';
import { useTranslation } from "react-i18next";

function Tables() {
  const [t, i18n] = useTranslation("global");

  return (
    <div  className={styles.TableContainer} responsive>
      <thead className={styles.thead} responsive>
        <tr>
          <th></th>

          
          <th className={styles.BgDark} >{t("TRADING_ACCOUNTS.Bronze")}</th>
          <th className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Silver")}</th>
          <th className={styles.BgDark}>{t("TRADING_ACCOUNTS.Gold")}</th>
          <th className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Platinum")}</th>
          <th className={styles.BgDark}>{t("TRADING_ACCOUNTS.Diamond")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Minimum")}</td>
          <td>$250 </td>
          <td className={styles.BgWhiteDark}>$2,500 </td>
          <td>$10,000 </td>
          <td className={styles.BgWhiteDark}>$50,000 </td>
          <td>$100,000</td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Standard")}</td>
          <td className={styles.BgWhiteDark}> 3 Pips</td>
          <td>2 Pips </td>
          <td className={styles.BgWhiteDark}> 1.5 Pips </td>
          <td>1 Pips </td>
          <td className={styles.BgWhiteDark}>0.5 Pips </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Leverage")}</td>
          <td>1:200</td>
          <td className={styles.BgWhiteDark}>1:200</td>
          <td>1:400 </td>
          <td className={styles.BgWhiteDark}>1:400 </td>
          <td>1:400 </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Daily")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
          <td>{t("TRADING_ACCOUNTS.Yes")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
          <td>{t("TRADING_ACCOUNTS.Yes")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Stop")}</td>
          <td>30% </td>
          <td className={styles.BgWhiteDark}>30% </td>
          <td>25%</td>
          <td className={styles.BgWhiteDark}>15% </td>
          <td>15% </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Assistant")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Support")} </td>
          <td>{t("TRADING_ACCOUNTS.Manager")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Manager")}</td>
          <td>{t("TRADING_ACCOUNTS.ManagerSenior")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.ManagerSenior")} </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Welcome")}</td>
          <td>5% </td>
          <td className={styles.BgWhiteDark}>10% </td>
          <td>15% </td>
          <td className={styles.BgWhiteDark}>20% </td>
          <td>25%</td>
        </tr>
        <tr>
          <td className={styles.Bgligth}> {t("TRADING_ACCOUNTS.Trading")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.No")} </td>
          <td> {t("TRADING_ACCOUNTS.No")} </td>
          <td className={styles.BgWhiteDark}>10 </td>
          <td>15 </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Unlimited")} </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}> {t("TRADING_ACCOUNTS.Tools")}</td>
          <td>{t("TRADING_ACCOUNTS.Yes")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
          <td>{t("TRADING_ACCOUNTS.Yes")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
          <td>{t("TRADING_ACCOUNTS.Yes")}</td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Term")}</td>
          <td className={styles.BgWhiteDark}> {t("TRADING_ACCOUNTS.No")} </td>
          <td> {t("TRADING_ACCOUNTS.No")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.No")}</td>
          <td>{t("TRADING_ACCOUNTS.Yes")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Trader")}</td>
          <td> {t("TRADING_ACCOUNTS.No")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.3Course")} </td>
          <td>{t("TRADING_ACCOUNTS.3Courses")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Courses")} </td>
          <td>{t("TRADING_ACCOUNTS.Courses")} </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Size")}</td>
          <td className={styles.BgWhiteDark}>min.0.01 - max.25 </td>
          <td>min.0.01 - max.25 </td>
          <td className={styles.BgWhiteDark}>min.0.01 - max.25 </td>
          <td>min.0.01 - max.25</td>
          <td className={styles.BgWhiteDark}>min.0.01 - max.25 </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Swap")}</td>
          <td>{t("TRADING_ACCOUNTS.No_discount")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.No_discount")}</td>
          <td>{t("TRADING_ACCOUNTS.specific")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.assets")}</td>
          <td>{t("TRADING_ACCOUNTS.assets1")}</td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Webinars")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.No")} </td>
          <td>{t("TRADING_ACCOUNTS.Yes")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")}</td>
          <td>{t("TRADING_ACCOUNTS.Yes")}</td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
        </tr>
        <tr >
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.WebinarsVIP")}</td>
          <td> {t("TRADING_ACCOUNTS.No")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.No")} </td>
          <td> {t("TRADING_ACCOUNTS.No")} </td>
          <td className={styles.BgWhiteDark}>{t("TRADING_ACCOUNTS.Yes")} </td>
          <td>{t("TRADING_ACCOUNTS.Yes")} </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Commisions")}</td>
          <td className={styles.BgWhiteDark}>0%</td>
          <td>0% </td>
          <td className={styles.BgWhiteDark}>0% </td>
          <td>$7 {t("TRADING_ACCOUNTS.Per")} </td>
          <td className={styles.BgWhiteDark}>$7 {t("TRADING_ACCOUNTS.Per")}</td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Futures")}</td>
          <td>$10 </td>
          <td className={styles.BgWhiteDark}>$10 </td>
          <td>$10</td>
          <td className={styles.BgWhiteDark}>$10 </td>
          <td>$10 </td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Stocks")}</td>
          <td className={styles.BgWhiteDark}>1% </td>
          <td>1% </td>
          <td className={styles.BgWhiteDark}>0.50% </td>
          <td>0.30% </td>
          <td className={styles.BgWhiteDark}>0.20%</td>
        </tr>
        <tr>
          <td className={styles.Bgligth}>{t("TRADING_ACCOUNTS.Crypto")}</td>
          <td>2% </td>
          <td className={styles.BgWhiteDark}>2% </td>
          <td>1% </td>
          <td className={styles.BgWhiteDark}>0.50% </td>
          <td>0.30% </td>
        </tr>
      </tbody>
    </div>
  );
}

export default Tables;
