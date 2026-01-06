import { useEffect } from "react";
import Swal from "sweetalert2";
// SHOW ERROR MESSAGE WHEN ERROR HAVE BEEN CAUGHT
export default function FallBackUI({ error }) {
  useEffect(() => {
    Swal.fire({
      position: "top",
      icon: "error",
      title: `${error.message}`,
      customClass: {
        title: "sweetAlert",
      },
    });
  }, [error]);

  return null;
}
