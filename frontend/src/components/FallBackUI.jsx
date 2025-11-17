import Swal from "sweetalert2";

export default function FallBackUI({ error }) {
  return Swal.fire({
    position: "top",
    icon: "error",
    title: `${error.message}`,
    customClass: {
      title: "sweetAlert",
    },
  });
}
