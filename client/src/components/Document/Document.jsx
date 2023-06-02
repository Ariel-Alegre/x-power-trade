import React, { useState } from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import styles from "./Document.module.scss";
import AccountMenu from "../AccountMenu/AccountMenu";
import Identify from "../Identify/Identify";
import SideBar from "../Sidebar/index";
import Button from "@mui/material/Button";



const UploadDocument = () => {
  const [frontalImage, setFrontalImage] = useState(null);
  const [dorsalImage, setDorsalImage] = useState(null);

  const handleFrontalImageChange = (e) => {
    const file = e.target.files[0];
    setFrontalImage(URL.createObjectURL(file));
  };

  const handleDorsalImageChange = (e) => {
    const file = e.target.files[0];
    setDorsalImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <SideBar />
      <Identify />
      <AccountMenu />
      <Container className={`my-5 ${styles.DocumentContainer}`}>
        <h2 className="text-center mb-4">Subir imágenes del documento</h2>
        <Row className={`justify-content-center ${styles.row}`}>
          <Col md={6}>
            <Form>
              <Form.Group controlId="frontalImage">
                <Form.Label>Imagen frontal:</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFrontalImageChange}
                  className={styles.input}
                  required
                />
              </Form.Group>
              {frontalImage && (
                <Image
                  src={frontalImage}
                  alt="Foto frontal"
                  fluid
                className={`mt-3 ${styles.image}`}

                />
              )}

              <Form.Group controlId="dorsalImage">
                <Form.Label>Imagen dorsal:</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleDorsalImageChange}
                  className={styles.input}
                  required
                />
              </Form.Group>
            </Form>
            {dorsalImage && (
              <Image
                src={dorsalImage}
                alt="Foto dorsal"
                fluid
                className={`mt-3 ${styles.image}`}
              />
            )}
            <div className={styles.ImageContainer}>

              <Button
            type="submit"
            variant="contained"
            
            >
           Subir
          </Button>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UploadDocument;
