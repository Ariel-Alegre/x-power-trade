import * as React from 'react';
import Button from "@mui/material/Button";
import styles from './Users.module.css'


export default function Users() {
  return (
    <div className={styles.table}>
    <table className="table">
      <thead
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#fff",
        }}
      >
        <tr>
          <th>Nombre completo</th>
          <th>Email</th>
          <th>Telefóno</th>
          <th>Información</th>

        
        </tr>
      </thead>
      <tbody>
    
            <tr >
              <td>
                <span>asdasdsad</span>
                <span className="ms-3 text-muted">
                  asdasdsad
                </span>
              </td>
              <td>Venta</td>
              <td>asdasdasd</td>
            
              <td>
                <Button
                variant='contained'
                >
                  Ver
                </Button>
              </td>
            </tr>
      </tbody>
    </table>
  </div>
  );
}