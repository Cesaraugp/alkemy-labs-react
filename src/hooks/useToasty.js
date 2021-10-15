import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const useToasty = () => {
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

  const fire = (icon, title, footer) => {
    MySwal.fire({
      icon,
      title,
      footer,
    });
  };

  return { fire };
};

export default useToasty;
