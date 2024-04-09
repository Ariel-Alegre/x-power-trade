import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { Register, Users } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import { countries } from "../../assets/codeCountry/countries";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loadingSuccess, setLoadingSuccess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [messageApiError, contextHolderError] = message.useMessage();


  const success = () => {
    messageApi.open({
      type: "success",
      content: "Registrado correctamente",
    });
  };
  const Error = () => {
    messageApiError.open({
      type: "error",
      content: "El email ya esta registrado",
    });
  };

  useEffect(() => {
    dispatch(Users());
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountryIndex = event.target.selectedIndex;
    const selectedCountryCode = countries[selectedCountryIndex].phone;
    setSelectedCountry(selectedCountryCode);

    setRegister((prevRegister) => ({
      ...prevRegister,
      phone: `+${selectedCountryCode}${" "}`,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoadingSuccess(true);
    setTimeout(async () => {
      try {
        const registers = await dispatch(Register(register));
        if (registers) {
          success();
          navigate("/auth/login")
        }
      } catch (error) {
        Error();
        console.log(error);
      } finally {
        setLoadingSuccess(false);
        setIsSubmitting(false);
      }
    }, 3000);
  };
  const handleCountry = (event) => {
    const { name, value } = event.target;
    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value,
    }));
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <img
          className="mx-auto h-20 w-auto"
          src={require("../../Logos/logo-1.png")}
          alt="Your Company"
        />
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Registrarse
        </h2>
        <p className="mt-10 text-center ">
          ¿Ya tienes una cuenta?
          <Link to="/auth/login">Iniciar sesión</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={register.name}
                onChange={(e) =>
                  setRegister({ ...register, name: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                onChange={(e) =>
                  setRegister({ ...register, lastName: e.target.value })
                }
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
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setRegister({ ...register, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Contraseña
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setRegister({ ...register, password: e.target.value })
                }
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
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-0  text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm input-global"
                    onChange={handleCountryChange}
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country.phone}>
                        {country.code} (+{country.phone})
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-36 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input-global"
                  value={register.phone}
                  onChange={handleCountry}
                  required
                />
              </div>
          </div>

          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-blue-500" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
                    isSubmitting && "pointer-events-none" // Desactiva la interacción cuando se está procesando el registro

                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              Acepte nuestra politica y privacidad{" "}
              <a href="#" className="font-semibold text-blue-500">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={!agreed}
            style={{ color: !agreed ? "gray" : "white" }}
          >
            {loadingSuccess ? (
              <CircularProgress
                  size={25}
                thickness={5}
                sx={{ color: "#fff" }}
              />
            ) : (
              "Registrarse"
            )}
          </button>
        </div>
        {contextHolder}
        {contextHolderError}

      </form>
    </div>
  );
}
