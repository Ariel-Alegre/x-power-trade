import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./LoadMoreDeposit.module.scss";
import Buttons from "../../../../Regulation/Button/Button";
import NavBar from "../../../../Regulation/Navbar/NavBar";
import BGimage from "../../../AboutUs/BGimage/BGimage";
import Footer from "../../../../Footer/Footer";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: ` 1.2px solid `,
  width: "1150px",
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
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#1976d2" }} />
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
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function LoadMoreDeposit() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <div className={styles.Buttons}>

        <Buttons />
        </div>
        
        <NavBar/>
        <BGimage/>
      <div className={styles.AccordionContainer}>
        <div className={styles.BoxContainer}>
          <h2>Deposits & Withdrawals</h2>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
What deposit/withdrawal methods do you offer?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              EZInvest offers a variety of payment methods including credit and debit cards, e-Wallets, Bank Wire transfers. (Payment methods is a hyperlink to payment methods page)
              </p>
              <p>
              You should note that we do not accept cash deposits.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What are the minimum/maximum limits on deposits/withdrawals?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Limits are set by the payment providers individually. The minimum/maximum for each method can be found in My Account. (My Account is a hyperlink to my account page)
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
              Where can I find the status of my deposit/withdrawal/transfer?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              You can find full details on your transactions in the CLIENT AREA by following the steps below.
              </p>
              <p>
              1. Go to ‘Monetary Transactions’. (transaction history is a hyperlink to monetary transactions page)
              <br />
              2. Find the relevant transaction.
              <br />
              3. Click on the transaction ID number.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What currencies can I make a deposit in?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              The deposited currency corresponds to the account currency.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I deposit funds into my account?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              In order to deposit funds you need to have completed the questionnaire first.

              </p>
              <p>
              1. Open the Deposit funds page within section in My Account.
              <br />
              2. Choose your preferred deposit method and click ‘Deposit’.
              <br />
              3. Select the account you wish to deposit funds into and complete the necessary fields.
              <br />
              4. Confirm your deposit details in the next page.
              <br />
              Some additional steps may be asked from your payment provider.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How long does it take to process my deposit?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              It usually takes a few seconds to a few minutes.
              </p>
              <p>
              If we need to request and verify additional information then the processing time might be longer.
              </p>
              <p>
              Please note that EZInvest is not liable for any delays caused by a 3rd party payment processor.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
I made a deposit during a weekend/bank holiday, when will it be processed?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              All deposits made during the weekend/bank holidays will be processed according to the standard processing times for each payment method.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Can I deposit from a country other than my country of residence?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Yes, however you will need to send us an to email explaining the reason for this. Our company always wants to comply in accordance of the AML laws.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                
Can I deposit using a joint account?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Yes, you will need to firstly upload or email us the following:
              </p>
              <p>
              1. Joint Account Form
              <br />
              2. Account holders’ identification (ID) documents
              <br />
              3. A recent copy of a Bank Statement clearly stating the account holders’ names and account number.
              <br />
              4. Payment confirmation from the specified account.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
Can I deposit to my personal trading account using a corporate account?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              If the funds are deposited through the shareholder’s personal bank account then:
              </p>
              <p>
              If you are the sole shareholder: The deposit can be processed, but the withdrawal must be sent back to the same bank account as that which made the initial deposit.
              </p>
              <p>
              If there are several shareholders with holdings above 10%: We need written consent from all shareholders. Once written consent is received then the funds will be processed. If a withdrawal is requested, the funds must be sent back to the same bank account as that which made the initial deposit.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Can I deposit using a method that is not on my name?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              No, we do not accept third-party transfers. The name of the sender must match the name used when registering with EZInvest.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
I'm depositing via Credit/Debit Card, are there any more steps I should follow?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              After completing the steps outlined in ‘How to deposit funds into my account?’ you will be redirected to your bank’s page where you will be asked to provide some additional information.
              </p>
              <p>
              If this is your first deposit via Credit/Debit card you will need to upload or email a clear color copy of the front of your credit card in order for us to process your request.
              </p>
              <p>
              The following information should be visible:
              </p>
              <p>
              1. The card-holders name (This must match the name used during registration).
              <br />
              2. Name of issuing bank
              <br />
              3. The last 4 digits of the card number (all others must be covered).
              <br />
              4. Credit/Debit card expiry date.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
I'm depositing via E-wallet, are there any more steps I should follow?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              After completing the steps outlined in ‘How to deposit funds into my account?’ you will be re-directed to your selected E-wallet’s website in order to approve your transaction.
              </p>
              <p>
              Please note that some e-wallets may require additional details.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
             
I'm depositing via Bank-Wire, are there any more steps I should follow?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>After completing the steps outlined in ‘How to deposit funds into my account?’ you will be given details on how to proceed with an online payment or transfer from your bank account to EZINVEST bank account.</p>
              <p>
              Once the transaction is complete, you will have to upload or email the payment confirmation showing the following:
              </p>
              <p>
              1. The bank account number.
              <br />
              2. Bank account holder’s name (this should match the name used during registration).
              <br />
              3. Payment details.
              <br />
              Your transfer should be processed within 3-5 business days from the date the funds were sent from your account. If your deposit takes
              <br />
              onger than 5 business days please contact us.
              </p>
              <p>
              Please note that EZInvest is not responsible for any additional bank charges.
              </p>


            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
Why is the balance in my account different than what I deposited?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              This is extremely rare since EZInvest absorbs all the standard charges. There might be a rare possibility due to additional charges made by your payment provider/bank. If this is the case, you should contact your payment processor for further clarification as we do not have access to third-party service systems.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel16"}
            onChange={handleChange("panel16")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I withdraw funds from my account?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              1. Go the Withdraw page within the ‘My Account’ section.
              <br />
              2. Select the payment method and click ‘Withdraw’.
              <br />
              3. Select the EZInvest account you wish to withdraw funds from and complete the necessary fields.
              <br />
              4. Select a reason for withdrawal and click ‘Submit’.
                            </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel17"}
            onChange={handleChange("panel17")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
              Can I withdraw using a different method than the one I used to deposit?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Withdrawals must be made in proportion to the deposits according to the payment method used.
              </p>
              <p>
                
Your withdrawals must be transferred to the same card, e-wallet, bank account used for deposit.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel18"}
            onChange={handleChange("panel18")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              How long does it take to process my withdrawal?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              All withdrawal requests are processed by our Back Office Department within the same business day, however the time required for the funds to be transferred to your account will depend on the payment method used.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel19"}
            onChange={handleChange("panel19")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              What should I do if the card I used to deposit was cancelled/lost?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              You will need to email us an official document from the card issuer stating that the card was cancelled or lost and we will then inform you on how to procee
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel20"}
            onChange={handleChange("panel20")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              Can I still withdraw if I have open positions?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Yes, provided that you have sufficient free margin on your account to cover the withdrawal and any extra fees that may occur.
              <br />
              You can calculate your free margin <a href="">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel21"}
            onChange={handleChange("panel21")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              I'm withdrawing via Credit/Debit Card, are there any more steps i should follow?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              If this is your first withdrawal, you should ensure that the withdrawal is made to the same card used to make your initial deposit.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel22"}
            onChange={handleChange("panel22")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
              I'm withdrawing via E-Wallet, are there any more steps I should follow?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              If your e-wallet has already been verified, your withdrawal will be processed automatically.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel23"}
            onChange={handleChange("panel23")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              I'm withdrawing via Bank-Wire, are there any more steps I should follow?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              In order to withdraw you will need to verify your bank account by uploading a bank statement showing:
              </p>
              <p>
                <li>Account holder’s name (this should match the name used during registration)</li>
                <li>IBAN</li>
                <li>BIC/SWIFT</li>
                <li>Bank Name</li>
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel24"}
            onChange={handleChange("panel24")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              How can I cancel my withdrawal request?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Contact our support team via email or live chat and we will assist you.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel25"}
            onChange={handleChange("panel25")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              Why was my deposit declined?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Your request was possibly declined because of one of the reasons below:
              </p>
              <p>
              – Card not active for online activity
              </p>
              <p>
              – Payment declined by card issuer
              </p>
              <p>
              – 3D security (Credit/Debit Card)
              </p>
              <p>
              – Incorrect card details
              </p>
              <p>
              – Insufficient funds
              </p>
              <p>
              – System Error
                </p>       
                <p>
                – Invalid email/user name (E-wallets)
                </p>  

                <p>
                – Wrong account number
                    </p>

                    <p>
                        
                    – Incorrect currency (Bank – wire)
                    </p>    
                    <p>
                        
– Wrong purpose of payment (Bank – wire)
                    </p>

                    <p>
                    – Transaction rejected by bank
                    </p>
                    <p>
                    – Incorrect recipient name (Bank – wire)
                    </p>
                    <p>
                    If you need any further clarification please contact your Account Manager or Customer Support.
                    </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel26"}
            onChange={handleChange("panel26")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
              Why was my withdrawal request declined?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              Your request was possibly declined because of one of the reasons below:
              </p>
              <p>
              – Insufficient balance.
              </p>
              <p>
              – Incorrect details.
              </p>
              <p>
              – Insufficient free margin to cover open positions.
              </p>
              <p>
              – Payment method used for withdrawal is different from the one used to deposit.
              </p>
              <p>
              – Withdrawal amount exceeds deposit amount (Credit/Debit Cards).
              </p>
              <p>
              – Withdrawal doesn’t cover payment system charges.
              </p>
              <p>
              – Additional information requested was not provided.
              </p>
              <p>
              – Third-party transfer request.
              </p>
              <p>
              If you need any further clarification please contact your Account Manager or Customer Support.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel27"}
            onChange={handleChange("panel27")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>

              What should I do if I don’t receive my withdrawal?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
              If you haven’t received your funds, then you should contact our support department via email or live chat in order for us to assist you with your inquiry.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
