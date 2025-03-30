import * as React from "react";
import styles from "./Identify.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { DataPersonal } from "../../Redux/action";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Identify() {
  const dispatch = useDispatch();
  const dataPersonal = useSelector((state) => state.dataPersonal);
  const token = useSelector((state) => state.token);

  React.useEffect(() => {
    dispatch(DataPersonal(token));
  }, [dispatch, token]);
  return (
    <div className={styles.IdentifyContainer}>
      
      <div >
         <ButtonGroup  aria-label="Basic button group" >

      <Button
      sx={{color: '#000'}}
      >
      <div className={styles.textContainer}>
          <div className={styles.activeContainer}>
            <span>Número de cuenta</span>
          </div>
          <strong>{dataPersonal.accountNumber && dataPersonal.accountNumber }</strong>
        </div>
      </Button>
      <Button
      sx={{color: '#000'}}
      >
      <div className={styles.textContainer}>
          <div className={styles.activeContainer}>
          <span>Divisa</span>
          </div>
          <strong>USD</strong>
        </div>
      </Button>
      <Button
      sx={{color: '#000'}}
      >
      <div className={styles.textContainer}>
          <div className={styles.activeContainer}>
            <div className={styles.active}></div>
            <span>Tipo</span>
          </div>
          <strong>Real</strong>
        </div>
      </Button>
    </ButtonGroup>
     
    
      </div>
    </div>
  );
}
