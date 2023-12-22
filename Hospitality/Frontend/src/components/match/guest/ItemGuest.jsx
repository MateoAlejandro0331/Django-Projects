

const ItemGuest = ({ guest, setMatachGuest }) => {

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
      <td className="text-[#263238]  bg-teal-800 border border-slate-600 rounded-lg hover:bg-[#78909c]">
          <button
            className="flex items-center italic text-white justify-center w-full h-full focus:outline-none hover:bg-[#78909c]"
            onClick={handleGuest}
          >
            <p className="text-sm">MATCH</p>
          </button>
      </td>
    </tr>
  );
};

export default ItemGuest;
