import { useEffect, useState } from "react";
import authService from "../../services/auth";
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
    //TODO  chequear si ya hay token guardado en sessionStorage
  }, []);

  const signin = async (credentials, cb) => {
    try {
      MySwal.fire({
        icon: "error",
        title: `Vaya, ha ocurrido un error al autenticar`,
        footer: "Credenciales inválidas",
      });
      const user = await authService.login(credentials, cb);

      setUser(user);
      cb();
    } catch (error) {
      if (error.message) {
        console.log(JSON.stringify(error));
      }
    }
  };

  const signout = (cb) => {
    setUser(null);
    cb();
  };

  return {
    user,
    signin,
    signout,
  };
}
