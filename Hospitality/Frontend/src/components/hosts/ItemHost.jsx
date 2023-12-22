import axios from "axios";
import { api } from "../../variables";
import deleteIcon from "../../img/delete.png";
import updateICon from "../../img/update.png";

const ItemHost = ({ host, setRemove }) => {
  const handleDelete = async () => {
    try {
      const url = `${api}/host/${host.id}`; // URL de la solicitud DELETE
      console.log(host.name);
      const response = await axios.delete(url);
      console.log("Usuario eliminado");
      setRemove(true);
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  return (
    <tr className="border border-slate-600">
      <td className="text-[#37474f] capitalize  hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {host.name}
      </td>
      <td className="text-[#37474f]  hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        {host.email}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        {host.document}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        {host.phone}
      </td>
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        {host.city}
      </td>
      <td className="px-4 py-2 text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        <p className="text-ellipsis">{host.address}</p>
      </td> 
      <td className="px-4 py-2 w-20 text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        <p className="text-ellipsis overflow-hidden">{host.guests}/{host.capacity}</p>
      </td>
      <td className="text-[#263238] border border-slate-600 rounded-lg">
        <div className="flex justify-start">
          <button
            className="flex items-center focus:outline-none hover:bg-[#78909c]"
            onClick={handleDelete}
          >
            <img className="w-4 h-4" src={deleteIcon} alt="" />
            <p className="text-xs">Delete</p>
          </button>
        </div>
        <div className="flex justify-end mr-1">
          <img className="w-4 h-4" src={updateICon} alt="" />
          <p className="text-xs">Update</p>
        </div>
      </td>
    </tr>
  );
};

export default ItemHost;
