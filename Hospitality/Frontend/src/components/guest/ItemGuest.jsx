import axios from "axios";
import { api } from "../../variables";
import deleteIcon from "../../img/delete.png";
import updateICon from "../../img/update.png";
import Swal from 'sweetalert2'


const ItemGuest = ({ guest, setRemove }) => {

  const handleDelete = async () => {
    /*try {
      const url = `${api}/guest/${guest.id}`; // URL de la solicitud DELETE
      const response = await axios.delete(url);
      setRemove(true);
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }*/
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  };

  return (
    <tr className="border border-slate-600">
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.name}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.email}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.document}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.phone}
      </td>
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.city}
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

export default ItemGuest;
