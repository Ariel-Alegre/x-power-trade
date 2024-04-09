import styles from "./Platforms.module.scss";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Monitor from "../../../image/Monitor.png";
import { useTranslation } from "react-i18next";

export default function Platforms() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={styles.platformsContainer}>
      <div className={styles.tradingPlatforms}>
        <img src={Monitor} alt="Not found" />
        <h6>{t("Platforms.Trading_Platforms")}</h6>
        <h3>{t("Platforms.Sirix")}</h3>
        <p>{t("Platforms.Description")}</p>
        <div className={styles.AccordionContainer}>
          <div className={styles.accordion}>
            <Accordion>
              <AccordionSummary
                className={styles.accordionSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={styles.titleAccordion}>
                  {t("Platforms.SIRIX_Webtrader")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{t("Platforms.Description2")}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.accordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={styles.titleAccordion}>MT4</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{t("Platforms.Description3")}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.btnContainer}>
            <a href="/dashboard">
              <button> {t("Platforms.Start_Trading_Now")}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
