import HostsTable from "./host/HostsTable";
import GuestsTable from "./guest/GuestsTable";
import axios from "axios";
import { useState, useEffect } from "react";
import { api } from "../../variables";
import Swal from "sweetalert2";

const Match = () => {
  const [matchHost, setMatchHost] = useState();
  const [matchGuest, setMatachGuest] = useState();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (matchHost && matchGuest) {
      Swal.fire({
        title: `¿Deseas emparejar a ${matchGuest.name} con ${matchHost.name}?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          const requestData = {
            hospedador: matchHost.document,
            huesped: matchGuest.document,
          };
          axios
            .put(`${api}/match/`, requestData)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Match Creado",
              });
              setReload(true);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: `${error.response.data}`
                  });
            });
        }
        setMatchHost();
        setMatachGuest();
      });
    }
  }, [matchHost, matchGuest]);

  return (
    <div className="flex justify-center">
      <div className="w-2/4">
        <HostsTable setMatchHost={setMatchHost} setReload={setReload} reload={reload} />
      </div>
      <div className="w-2/4">
        <GuestsTable setMatachGuest={setMatachGuest} />
      </div>
    </div>
  );
};

export default Match;
