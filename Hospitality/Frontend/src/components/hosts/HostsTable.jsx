import { useState, useEffect } from "react";
import ItemHost from "./ItemHost";
import SearchHost from "./SearchHost";
import { api } from "../../variables.js";
import { Link } from "react-router-dom";
import axios from "axios";

const HostsTable = () => {
  const [hosts, setHosts] = useState([]);
  const [remove, setRemove] = useState(false);
  const [filter, setFilter] = useState({});
  const [change, setChange] = useState(false);

  const handleResetFilters = () => {
    setChange(true);
    setFilter({});
  };

  const getData = async () => {
    try {
      if (Object.entries(filter).length > 0) {
        const { data } = await axios.get(`${api}/filterhost/`, {
          params: filter,
        });
        console.log(data);
        setHosts(data);
        setFilter({});
      } else {
        const { data } = await axios.get(`${api}/host/`);
        setHosts(data);
      }
    } catch (error) {
      console.error("Error al obtener los hospedaores:", error);
    }
  };

  useEffect(() => {
    getData();
    setRemove(false);
  }, [remove]);

  useEffect(() => {
    getData();
    setChange(false);
  }, [change]);

  return (
    <div className="flex mt-10 justify-center">
      <div className="w-11/12">
        <div className="flex mb-2 ">
          <Link to="/CreateHost">
            <button
              className="w-40 h-10 mb-2 mr-2 select-none rounded-lg bg-gray-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md drop-shadow-2xl transition-all hover:shadow-lg hover:drop-shadow-2xl focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Create New Host
            </button>
          </Link>
          <div className="w-full">
            <SearchHost
              setFilter={setFilter}
              setChange={setChange}
              change={change}
            />
          </div>
          <div>
            <button
              onClick={handleResetFilters}
              className="w-32 h-10 mb-2 ml-2 select-none rounded-lg bg-gray-700 py-2 px-4 text-center align-middle font-sans text-xs font-semibold uppercase text-white shadow-md drop-shadow-2xl transition-all hover:shadow-lg hover:drop-shadow-2xl focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Delete Filters
            </button>
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-auto max-w-full">
          <table className="table-auto italic bg-[#b0bec5] w-full border-separate border-transparent border-spacing-2 border border-slate-800 rounded-lg drop-shadow-2xl">
            <thead>
              <tr>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  NAME
                </th>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  EMAIL
                </th>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  DOCUMENT
                </th>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  PHONE
                </th>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  CITY
                </th>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  ADDRESS
                </th>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  CAPACITY
                </th>
                <th className="text-[#263238] border border-slate-600 rounded-lg">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {hosts.map((host) => (
                <ItemHost key={host.id} host={host} setRemove={setRemove} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HostsTable;
