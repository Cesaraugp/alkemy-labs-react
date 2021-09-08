import { useEffect, useState } from "react";
import authService from "../services/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  })
);

export default function useAuthProvider() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let data = localStorage.getItem("loggedHeroAppUser");
    data = JSON.parse(data);
    const token = data && data["token"];
    if (token && !user) {
      setUser({ ...user, token });
    }
  }, [user]);
  const signin = async (credentials, cb) => {
    try {
      const { data: user } = await authService.login(credentials, cb);
      localStorage.setItem("loggedHeroAppUser", JSON.stringify(user));

      setUser(user.token);
      MySwal.fire({
        icon: "success",
        title: `Bienvenido!, es un gusto verte de vuelta`,
        footer: "Inicio de sesión exitoso",
      });
      cb();
    } catch (error) {
      if (error.message) {
        MySwal.fire({
          icon: "error",
          title: `Vaya, ha ocurrido un error al autenticar`,
          footer: "Credenciales inválidas",
        });
      }
    }
  };

  const signout = (cb) => {
    setUser(null);
    localStorage.removeItem("loggedHeroAppUser");
    cb();
  };

  return {
    user,
    signin,
    signout,
  };
}
