import ItemStudent from "./ItemStudent"

const Students = () => {
  return (
    <div className="flex mt-16 justify-center">
      <div className="w-2/3">
        <table className="border border-separate border-slate-800 w-full">
          <thead>
            <tr>
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">Email</th>
              <th className="border border-slate-600">Document</th>
              <th className="border border-slate-600">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-slate-600">
              <td className="py-2">John Doe</td>
              <td className="py-2">johndoe@example.com</td>
              <td className="py-2">123456789</td>
              <td className="py-2">555-1234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Students
