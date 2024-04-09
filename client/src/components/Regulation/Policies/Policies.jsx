import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import NavBar from "../Navbar/NavBar";
import Image from "../Image/ImageRegulation";
import Buttons from "../Button/Button";
import Footer from "../../Footer/Footer";
import styles from "./Policies.module.scss";
import Pdf1 from "../../../Pdf/16-11-22-Sanus_TermsAndConditions-3.pdf";
import Pdf2 from "../../../Pdf/16-11-22-Sanus_RiskDisclosure-3.pdf";
import Pdf3 from "../../../Pdf/16-11-22-Sanus_ComplainHandlingPolicy-4.pdf";
import Pdf4 from "../../../Pdf/16-11-22-Sanus_LeveragePolicy.pdf";
import Pdf5 from "../../../Pdf/16-11-22-Sanus_RefundAndCancellationPolicy-3.pdf";
import Pdf6 from "../../../Pdf/16-11-22-Sanus_FAISActDisclosure-4.pdf";
import Pdf7 from "../../../Pdf/16-11-22-Sanus_ConflictsOfInterestsPolicy-4.pdf";
import Pdf8 from "../../../Pdf/16-11-22-Sanus_AMLPolicy-6.pdf";
import Pdf9 from "../../../Pdf/16-11-22-Sanus_OrderExecutionPolicy-4.pdf";
import Pdf10 from "../../../Pdf/16-11-22-Sanus_PrivacyPolicy-3.pdf";
import Pdf11 from "../../../Pdf/16-11-22-SANUS_PAIA_Manual.pdf";
import Pdf12 from "../../../Pdf/Bonus_TC-Sanus_V2.pdf";
import Pdf13 from "../../../Pdf/16-11-22-Cashback-and-IPhone-Bonus-_Terms-and-Conditions.pdf";
import Logos from "../../../Logos/logo-1.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #1F2649`,
  "": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#1F2649" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid #1F2649",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [isLoading, setIsLoading] = React.useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  React.useEffect(() => {
    // Simulación de una tarea asíncrona
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado a "false" después de cierto tiempo
    }, 2000); // Esperar 2 segundos antes de cambiar el estado
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className={styles.loading_container}>
          <img src={Logos} alt="Cargando..." />
          <div className={styles.loading_overlay}></div>
        </div>
      ) : (
        <div>
          <NavBar />
          <Image />
          <div className={styles.AccordionContainer}>
            <h3>Policies</h3>
            <Accordion
              className={styles.Accordion}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className={styles.title}>
                  POLICIES AND DOCUMENTATION
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul className={styles.list}>
                    <li>
                      <a href={Pdf1}>Sanus Terms & Conditions {">"} </a>
                    </li>
                    <li>
                      <a href={Pdf2}>Sanus Risks Disclosure {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf3}>Sanus Complaints Handling Policy {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf4}>Sanus Leverage Policy {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf5}>
                        Sanus Refund and Cancellation Policy {">"}
                      </a>
                    </li>
                    <li>
                      <a href={Pdf6}>
                        Sanus Financial Advisory and Intermediary Services Act
                        Disclosure{">"}{" "}
                      </a>
                    </li>
                    <li>
                      <a href={Pdf7}>Sanus Conflict of Interest Policy {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf8}>Sanus AML Policy {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf9}>Sanus Order Execution Policy {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf10}>Sanus Privacy Policy {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf11}>Sanus PAIA Manual {">"}</a>
                    </li>
                    <li>
                      <a href={Pdf12}>Deposit Bonus Terms and Conditions</a>
                    </li>
                    <li>
                      <a href={Pdf13}>Cashback/IPhone Terms and Conditions</a>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

/*       <div>
              
              <a href={pdf} target="_blank" rel="noopener">Sanus Terms &amp; Conditions &gt;</a>
          </div> */
