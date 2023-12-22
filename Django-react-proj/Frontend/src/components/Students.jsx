import { useState, useEffect } from "react";
import ItemStudent from "./ItemStudent";
import { api } from "../variables.js";
import axios from "axios";


const Students = () => {
  const [students, setStudents] = useState([]);
  const [remove, setRemove] = useState(false);

  const getData = async () => {
    const { data } = await axios.get(`${api}/students/`);
    setStudents([...data]);
  };

  useEffect(() => {
    getData();
    setRemove(false);
  }, [remove]);

  return (
    <div className="flex mt-16 justify-center">
      <div className="w-2/3">
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
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <ItemStudent key={student.pk} 
                student={student}
                setRemove={setRemove}
                />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
