import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from "antd";
import { DataPersonal, UpdatePersonal } from "../../Redux/action";

export default function Example() {
  const dispatch = useDispatch();
  const dataPersonal = useSelector((state) => state.dataPersonal);
  const token = useSelector((state) => state.token);
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const Success = () => {
    messageApi.open({
      type: "success",
      content: "Actualizado correctamente",
    });
  };

  const [data, setData] = useState({
    userId: dataPersonal.id,
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    setData({
      ...data,
      userId: dataPersonal.id || "",
      name: dataPersonal.name || "",
      lastName: dataPersonal.lastName || "",
      email: dataPersonal.email || "",
      password: dataPersonal.password || "",
      phone: dataPersonal.phone || "",
    });
  }, [dataPersonal]);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(DataPersonal(token));
  }, [token, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingButton(true);
    setTimeout(async () => {
      try {
        dispatch(UpdatePersonal(data));
        alert('Actualizado correctamente')
      } catch (error) {
        messageApi.open({
          type: "error",
          content: "Error a la hora de actualizar",
        });
        console.log(error);
      } finally {
        setLoadingButton(false);
      }
    }, 1000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {contextHolder}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Actualizar información
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Actualizar mi información personal.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                onChange={handleChange}
                value={data.name}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Correo eléctronico
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                value={data.email}
                onChange={handleChange}
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Contraseña
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Teléfono
            </label>
            <div className="relative mt-2.5">
              <input
                id="phone"
                name="phone"
                onChange={handleChange}
                value={data.phone}
                type="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" variant="contained" sx={{ width: "100%" }}>
            {loadingButton ? (
              <CircularProgress size={25} thickness={5} sx={{ color: "#fff" }} />
            ) : (
              "Actualizar"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
