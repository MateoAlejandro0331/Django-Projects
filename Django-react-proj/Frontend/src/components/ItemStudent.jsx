import axios from "axios";
import { api } from "../variables";
import deleteIcon from "../img/delete.png";
import updateICon from "../img/update.png";

const ItemStudent = ({ student, setRemove }) => {

  const handleDelete = async () => {
    try {
      const url = `${api}/students/${student.pk}`; // URL de la solicitud DELETE
      console.log(student.name);
      const response = await axios.delete(url);
      console.log('Usuario eliminado');
      setRemove(true)
      // Realiza las acciones adicionales necesarias después de eliminar el elemento
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      // Realiza el manejo de errores correspondiente
    }
  };

  return (
    <tr className="border border-slate-600">
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {student.name}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {student.email}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {student.document}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {student.phone}
      </td>
      <td className="text-[#263238] border border-slate-600 rounded-lg">
      <div className="flex justify-start">
          <button className="flex items-center focus:outline-none hover:bg-[#78909c]" onClick={handleDelete}>
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

export default ItemStudent;
