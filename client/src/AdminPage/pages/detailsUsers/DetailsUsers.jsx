import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsUser } from "../../../Redux/action/";
import SidebarAdmin from "../../componentsAdmin/SidebarAdmin/SidebarAdmin";
import "./DetailsUsers.scss";
import { Button } from "@mui/material";
import { deleteUser } from '../../../Redux/action'

const UserDetails = () => {
  const dispatch = useDispatch();
  const { UserId } = useParams();
  const user = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(detailsUser(UserId));
  }, [dispatch, UserId]);
   

  const handelDelete = (e) => {
    dispatch(deleteUser(UserId))
  }

  return (
    <div>
      <div className="Details">
        <SidebarAdmin />

        <div className="DetailsContainer">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <t>
            <strong>Email:</strong> {user.email}
          </t>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <div className="button">

          <Button variant="contained" color="primary">
            Actualizar
          </Button>
          <Button variant="contained" color="secondary" onSubmit={handelDelete}>
            Eliminar
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
