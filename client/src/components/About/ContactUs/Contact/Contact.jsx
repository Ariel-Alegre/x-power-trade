import * as React from "react";
import styles from "./Contact.module.scss";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert' 

export default function Contact() {
  const [t, i18n] = useTranslation("global");

  const form = useRef();


  
  
  const sendEmail = (e) => {
    e.preventDefault();
   // swal("Mensaje enviado", "X POWER TRADE", "success");
    swal({
      title: "Mensaje enviado",
      text: "Gracias por comunicarte con X POWER TRADE",
      icon: "success",
      button: "Cerrar",
    });
    
    emailjs.sendForm('service_jm4kx3h', 'template_zfq1dtg', form.current, 'rnwxETCxjybwiNYLO')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
  });
      



  };

  return (
    <div className={styles.ContactContainer}>
      <Form className={styles.InputContainer} ref={form} onSubmit={sendEmail}>
        <div className={styles.Text}>
          <h6>{t("Contact_Us.Contact_Us")}</h6>
          <h3>{t("Contact_Us.Write")}</h3>
        </div>
        <div className={styles.NameEmail}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t("Contact_Us.Name")}</Form.Label>
            <Form.Control type="text" name="user_name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("Contact_Us.Email")}</Form.Label>
            <Form.Control type="email" name="user_email" required />
          </Form.Group>
        </div>
        <div className={styles.Message}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t("Contact_Us.Message")}</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" required />
          </Form.Group>
        </div>
        <div className={styles.CheckBox}>
          <input type="checkbox" name="" id="" required />
          <label htmlFor="">
            {t("Contact_Us.You_accept")}{" "}
            <a href="/regulation/policies">{t("Contact_Us.Terms")}</a>{" "}
            {t("Contact_Us.Services")}
            <a href="/regulation/policies"> {t("Contact_Us.Privicy")}</a>
          </label>
        </div>

        <div className={styles.BtnContainer}>
        <Button variant="primary" type="submit" >
            {t("Contact_Us.Button")}
          </Button>
          
        </div>
      </Form>
      <div className={styles.RequestSupport}>
        <h6> {t("Contact_Us.Support")}</h6>
        <h3>{t("Contact_Us.Request")} </h3>
        <p>{t("Contact_Us.Info")}</p>
        <div className={styles.SubTittles}>
          <strong> {t("Contact_Us.Headquarter")}</strong>
          <p>South Africa</p>
          <strong>Location</strong>
          <p>17 Midas Avenue, Olympus, Pretoria, Gauteng,0081 South Africa</p>
          <strong>Phone</strong>
          <p>+27 210 548 369</p>
          <strong>Email</strong>
          <p>support@sanusfinancial.com</p>
          <strong>Compliance email</strong>
          <p>compliance@sanusfinancial.com</p>
        </div>
      </div>
    </div>
  );
}
