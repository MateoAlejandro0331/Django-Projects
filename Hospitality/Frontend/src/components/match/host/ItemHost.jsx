import axios from "axios";


const ItemHost = ({ host, setMatchHost }) => {
  const handleHost = () => {
    setMatchHost(host);
  };

  return (
    <tr className="border border-slate-600">
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        {host.name}
      </td>
      <td className="text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        {host.phone}
      </td>
      <td className="text-[#37474f] capitalize hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        {host.city}
      </td>
      <td className="px-4 py-2 w-20 text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        <p className="text-ellipsis overflow-hidden">{host.address}</p>
      </td>
      <td className="px-4 py-2 w-20 text-[#37474f] hover:bg-[#78909c] border border-slate-600 rounded-lg text-center whitespace-nowrap">
        <p className="text-ellipsis overflow-hidden">{host.guests}/{host.capacity}</p>
      </td>
      <td className="text-[#263238]  bg-teal-800 border border-slate-600 rounded-lg hover:bg-[#78909c] whitespace-nowrap">
          <button
            className="flex items-center italic text-white justify-center w-full h-full focus:outline-none hover:bg-[#78909c] whitespace-nowrap"
            onClick={handleHost}
          >
            <p className="text-sm">MATCH</p>
          </button>
      </td>
    </tr>
  );
};

export default ItemHost;
