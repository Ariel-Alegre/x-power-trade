import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataCoinsPurches, Wallet } from "../../Redux/action";
import Table from "react-bootstrap/Table";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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

export default function Panel() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.token);
  const wallet = useSelector((state) => state.wallet);
  const dataCoinsPurches = useSelector((state) => state.dataCoinsPurches);
  const [open, setOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleOpen = (coin) => {
    setSelectedCoin(coin);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(Wallet(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(DataCoinsPurches(token));
  }, [dispatch, token]);

  const formattedBalance =
    wallet &&
    wallet.balance !== null &&
    typeof wallet.balance !== "undefined"
      ? wallet.balance.toFixed(2)
      : "";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div>
          {/* Tu contenido actual */}
          <div className="positionClosed">
            {dataCoinsPurches.length > 0 ? (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Mercado</th>
                    <th>Porcentaje</th>
                    <th>Vender</th>
                  </tr>
                </thead>
                <tbody>
                  {dataCoinsPurches.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={data.image}
                          alt=""
                          className="img-fluid me-4"
                          style={{ width: "5%" }}
                        />
                        <span>{data.coinId}</span>
                        <span className="ms-3 text-muted">{data.symbol}</span>
                      </td>
                      <td>% {data.percentage}</td>
                      <td>
                        <Button
                          sx={{ color: "red" }}
                          onClick={() => handleOpen(data)}
                        >
                          Vender
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <>
                <h4>Posiciones cerradas</h4>
                <div>
                  <p>
                    No comenzó a hacer trading, por lo que no tenemos posiciones
                    cerradas para presentar aquí.
                  </p>
                  <Button>
                    <span>Haga un depósito y comience a hacer trading!</span>
                  </Button>
                </div>
              </>
            )}
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form>
              <Box sx={style}>
                <div>
                  <div>
                    <div>
                      <img src={selectedCoin?.image} alt="not found" />
                    </div>
                    <div>
                      <ul>
                        <li>
                          Cuanto de <strong>{selectedCoin?.name}</strong>{" "}
                          desea comprar?
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      gap: "2em",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        background: "red",
                        ":hover": { background: "red" },
                      }}
                      onClick={handleClose}
                    >
                      Cancelar
                    </Button>
                  </Typography>
                </div>
              </Box>
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
}
