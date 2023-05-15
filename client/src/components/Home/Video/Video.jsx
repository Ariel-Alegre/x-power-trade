import Modal from "react-bootstrap/Modal";
import React from "react";
import imageVideo from "../../../image/image-video.jpg";
import styles from "./Video.module.scss";
import iconPlay from "../../../icons/play-icon.png";
import video from "../../../video/trading-video.mp4";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props}>
      <AiOutlineClose onClick={props.onHide} className={styles.btnExit} />

      <video src={video} autoPlay loop></video>
    </Modal>
  );
}

export default function App() {
  const [t, i18n] = useTranslation("global");
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={styles.videoContainer}>
      <img src={imageVideo} alt="not found" className={styles.playImage} />
      <img
        onClick={() => setModalShow(true)}
        src={iconPlay}
        alt="not found"
        className={styles.iconPlay}
      />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className={styles.textVideo}>
        <h6>{t("Video.About_Us")}</h6>
        <h3>{t("Video.Proven_Industry")}</h3>
        <p>{t("Video.Description1")}</p>
        <button> {t("Video.Btn")}</button>
      </div>
    </div>
  );
}
