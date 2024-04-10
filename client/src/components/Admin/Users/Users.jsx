import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./Users.module.css";
import { AllUsers } from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUser.data);

  React.useEffect(() => {
    dispatch(AllUsers());
  }, [dispatch]);
  console.log(allUser);
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
          {allUser &&
            allUser.map((data) => (
              <tr>
                <td>
                  <span className="ms-3 text-muted">
                    {data.User.name} {data.User.lastName}
                  </span>
                </td>
                <td>
                  <span>{data.User.email}</span>
                </td>
                <td>{data.User.phone} </td>

                <td>
                  <Link to={`/admin/user-details/${data.id}`}>
                    <Button variant="contained">Ver</Button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
