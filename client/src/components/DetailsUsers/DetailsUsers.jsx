import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { DataUser } from "../../Redux/action";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Input } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import { EditWalletUser } from "../../Redux/action";
import styles from "./DetailsUsers.module.css";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function DetailsUsers() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const datauser = useSelector((state) => state.datauser.data);
  const [open, setOpen] = useState(false);
  const [updataData, setupdataData] = useState({
    balance: 0,
    pl_open: 0,
    neto: 0,
  });

  const [loading, setLoading] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (datauser) {
      setupdataData({
        balance: datauser.balance || 0,
        pl_open: datauser.pl_open || 0,

        neto: datauser.neto || 0,
      });
    }
  }, [datauser]);
  useEffect(() => {
    dispatch(DataUser(userId));
  }, [dispatch, userId]);
  console.log(datauser);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      try {
        dispatch(EditWalletUser(userId, updataData));
      } catch (error) {
        console.log(error);
        alert("Hay un error");
      } finally {
        alert("Datos actualizados");
        window.location.reload();
        setLoading(false);
        setOpen(false);
      }
    }, 3000);
  };

  const handleChange = (e) => {
    setupdataData({
      ...updataData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Informacion del usuario
        </h3>
      </div>
      {datauser && datauser.User && (
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nombre completo
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {datauser.User.name} {datauser.User.lastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {datauser.User.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Telefóno
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {datauser.User.phone}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Saldo
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                ${datauser.balance ? datauser.balance : 0}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                P/L Abierto
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                ${datauser.pl_open ? datauser.pl_open : 0}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Patrimonio Neto
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                ${datauser.neto ? datauser.neto : 0}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <Button variant="contained" onClick={handleOpen}>
                  Editar
                </Button>
              </dt>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={styles.form_container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div>
                    <div>Editar valor del saldo</div>
                    <Input
                      size="large"
                      placeholder="Introduzca la cantidad del depósito"
                      prefix={"USD"}
                      name="balance"
                      type="number"
                      value={updataData.balance}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <div>Editar valor del P/L abierto</div>
                    <Input
                      size="large"
                      placeholder="Introduzca la cantidad del depósito"
                      prefix={"USD"}
                      type="number"
                      name="pl_open"
                      value={updataData.pl_open}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <div>Editar valor del neto</div>
                    <Input
                      size="large"
                      name="neto"
                      placeholder="Introduzca la cantidad del depósito"
                      prefix={"USD"}
                      type="number"
                      value={updataData.neto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Button type="submit" variant="contained">
                      {loading ? (
                        <label>
                          Editando{" "}
                          <CircularProgress
                            size={15}
                            thickness={5}
                            sx={{ color: "#fff" }}
                          />
                        </label>
                      ) : (
                        "Editar"
                      )}
                    </Button>
                  </div>
                </form>
              </Box>
            </Modal>
          </dl>
        </div>
      )}
    </div>
  );
}
