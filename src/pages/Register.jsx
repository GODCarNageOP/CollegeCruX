import logo from "../../src/assets/logo.png";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Input } from "@material-tailwind/react";

export default function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showSuccess();
      // Successfully signed in, navigate to the desired page
      navigate("/");
    } catch (error) {
      // Handle authentication errors here
      setError(true);
      console.error(error);
      showAlert(error.message);
    }
  };

  function showAlert(errorMessage) {
    Swal.fire({
      title: errorMessage,
      text: "Please try again!",
      icon: "error",
      confirmButtonText: "Okay",
    });
  }

  function showSuccess() {
    Swal.fire({
      title: "Succesfully Logged in",
      text: "",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto w-32 h-32" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            CollegeCruX
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleLogin}
          >
            <div>
              <div className="mt-2">
                <Input
                  label="Student Name"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <Input
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <Input
                  label="Contact No."
                  id="contact"
                  name="contact"
                  type="tel"
                  autoComplete="tel"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              {error && <span className="text-red-500 font-normal"></span>}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Alrady a member ?{" "}
            <Link to="/login">
              <a className="font-semibold leading-6 text-blue-500 hover:text-indigo-500">
                Login
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
