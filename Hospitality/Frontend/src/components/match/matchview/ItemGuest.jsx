

const ItemGuest = ({ guest }) => {

  const handleGuest = () => {
    setMatachGuest(guest)
  };

  return (
    <tr className="border border-slate-600">
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.name}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.phone}
      </td>
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.city}
      </td>
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.hospedador.name}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.hospedador.phone}
      </td>
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.hospedador.city}
      </td>
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center">
        {guest.hospedador.address}
      </td>
    </tr>
  );
};

export default ItemGuest;
