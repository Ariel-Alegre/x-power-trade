import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { allUser } from "../../../Redux/action";

const ListUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.AllUsers);
  console.log(users);

  useEffect(() => {
    dispatch(allUser())
    
  }, [dispatch]);

   
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>

          <th>Email</th>
          <th>Registro</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>

            <td>{user.name}</td>
            <td>{user.lastName}</td>

            <td>{user.email}</td>
            <td>{user.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListUsers;
