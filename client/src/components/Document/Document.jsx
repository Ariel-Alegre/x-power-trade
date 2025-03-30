import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import styles from "./Document.module.scss";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { DataPersonal, UpdateIdentify } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

const UploadDocument = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [frontalImage, setFrontalImage] = useState(null);
  const [dorsalImage, setDorsalImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.token);
  const dataPersonal = useSelector((state) => state.dataPersonal);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Limpia el timeout
  }, []);
  useEffect(() => {
    dispatch(DataPersonal(token));
  }, [dispatch, token]);
  const handleFrontalImageChange = (e) => {
    const file = e.target.files[0];
    setFrontalImage(file); // Guarda el archivo directamente
  };

  const handleDorsalImageChange = (e) => {
    const file = e.target.files[0];
    setDorsalImage(file); // Guarda el archivo directamente
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(null); // Resetea el error al comenzar la carga

    const formData = new FormData();
    if (frontalImage) {
      formData.append('identifyFront', frontalImage); // Usa el archivo directamente
    }
    if (dorsalImage) {
      formData.append('identifyBack', dorsalImage); // Usa el archivo directamente
    }
    if (dataPersonal.id) {
      formData.append('userId', dataPersonal.id); // Usa el archivo directamente
    }

    try {
    
      await dispatch(UpdateIdentify(formData))
      
      alert('Documentos subidos correctamente'); // Mensaje de éxito
      navigate('/my-account')
    } catch (err) {
      setError('Error al subir los archivos');
      console.error(err);
    } finally {
      setUploading(false); // Asegúrate de que el estado de carga se restablezca
    }
  };

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress color="primary" />
        </div>
      ) : (
        <>
          <Container className={`my-5 ${styles.DocumentContainer}`}>
            <h2 className="mb-4">Subir imágenes del documento</h2>
            <Row className={`${styles.row}`}>
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
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
                      src={URL.createObjectURL(frontalImage)} // Usar URL.createObjectURL para vista previa
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
                  {dorsalImage && (
                    <Image
                      src={URL.createObjectURL(dorsalImage)} // Usar URL.createObjectURL para vista previa
                      alt="Foto dorsal"
                      fluid
                      className={`mt-3 ${styles.image}`}
                    />
                  )}
                  <div className={styles.ImageContainer}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={uploading}
                    >
                      {uploading ? 'Subiendo...' : 'Subir'}
                    </Button>
                  </div>
                </Form>
                {error && <p className="text-danger">{error}</p>}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default UploadDocument;
