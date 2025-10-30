import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { RegisterRequest } from "../../interfaces/RegisterRequest.ts";
import RegisterService from "../../services/RegisterService/RegisterService.ts";
import { useNavigate } from "react-router";

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const registerHandler = () => {
    let nErr = 0;

    if (!email) {
      toast.warn("L'indirizzo email non può essere vuoto...");
      nErr++;
    }

    if (!emailRegex.test(email)) {
      toast.warn("Inserisci un indirizzo email valido...");
      nErr++;
    }

    if (!password) {
      toast.warn("La password non può essere vuota...");
      nErr++;
    }

    if (!passwordRegex.test(password)) {
      toast.warn("Inserisci una password valida...");
      nErr++;
    }

    if (!passwordConfirm) {
      toast.warn("Conferma la password...");
      nErr++;
    }

    if (password != passwordConfirm) {
      toast.warn("Le password devono essere uguali...");
      nErr++;
    }

    if (nErr === 0) {
      const user: RegisterRequest = {
        username: email,
        rawPassword: password,
        role: "USER"
      }
      RegisterService(user)
        .then(() => {
          toast.success("Ti sei registrato correttamente!");
        })
        .catch(() => {
          toast.error("Riprova più tardi...");
        });
      setTimeout(() => {
        navigate("/login");
      }, 2000)
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="mr-2 h-8 w-8 rounded-[8px]"
              src="./logo.png"
              alt="logo"
            />
            <span className="text-[#06bd8f]">Echowave</span>
            <span className="ml-[8px]">Music</span>
          </a>
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl leading-tight font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registrati all'applicazione
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Inserisci email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Inserisci password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Conferma password
                  </label>
                  <input
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => {
                    registerHandler();
                  }}
                  type="submit"
                  className="me-2 mb-2 w-full cursor-pointer rounded-lg bg-[#06bd8f] px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Registrati
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Hai già un account?
                  <a onClick={() => navigate("/login")} className="text-primary-600 dark:text-primary-500 cursor-pointer font-medium hover:underline">
                    Accedi ora
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;