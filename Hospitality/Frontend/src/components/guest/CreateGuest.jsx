import axios from "axios";
import { api } from "../../variables";
import { useState } from "react";
import Swal from 'sweetalert2'

const CreateGuest = () => {
  const [guest, setGuest] = useState({
    name: "",
    email: "",
    document: "",
    phone: "",
    city: "",
    gender: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name !== 'email' && value !== 'F' && value !=='M') {
      value = value.toLowerCase()
    }
    setGuest((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${api}/guest/`, guest);
      setGuest({ 
        name: "", email: "", 
        document: "", phone: "", gender: ""
    });
    Swal.fire({
      icon: 'success',
      title: 'Guest successfully created',
      showConfirmButton: true,
    })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Guest could not be created',
        showConfirmButton: true,
      })
      console.error('Error al enviar el hospedador',error);
    }
  };

  return (
    <div className="flex mt-16 justify-center">
      <div className="lg:w-2/6 sm:w-2/4 bg-[#b0bec5] rounded-lg flex justify-center items-center">
        <div className="rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block font-sans text-center text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Create Guest
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter the details to register.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-2 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex justify-center">
              {" "}
              {/*Inicio de los campos*/}
              <div className="flex flex-col gap-4 ml-3">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="text"
                    name="name"
                    className="peer h-full w-full capitalize rounded-md border border-blue-gray-200 border-x-[#546e7a] border-b-[#546e7a] border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-blue-gray-200 focus:border-2 focus:border-[#546e7a] focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    value={guest.name}
                    onChange={handleChange}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-[#546e7a] before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-[#546e7a] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#546e7a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#546e7a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Name
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="email"
                    name="email"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-x-[#546e7a] border-b-[#546e7a] border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-blue-gray-200 focus:border-2 focus:border-[#546e7a] focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    value={guest.email}
                    onChange={handleChange}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#546e7a] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#546e7a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#546e7a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="number"
                    name="document"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-x-[#546e7a] border-b-[#546e7a] border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#546e7a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    value={guest.document}
                    onChange={handleChange}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#546e7a] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#546e7a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#546e7a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Document
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4 mx-3">
              <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="tel"
                    name="phone"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-x-[#546e7a] border-b-[#546e7a] border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#546e7a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    value={guest.phone}
                    onChange={handleChange}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#546e7a]-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#546e7a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#546e7a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Phone
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="text"
                    name="city"
                    className="peer h-full w-full capitalize rounded-md border border-blue-gray-200 border-x-[#546e7a] border-b-[#546e7a] border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#546e7a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    value={guest.city}
                    onChange={handleChange}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#546e7a]-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#546e7a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#546e7a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    City
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <select
                    name="gender"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-x-[#546e7a] border-b-[#546e7a] border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#546e7a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    value={guest.gender}
                    onChange={handleChange}
                  >
                    <optgroup label="Gender">
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
            <button
              className="mt-6 block w-full select-none rounded-lg bg-[#546e7a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGuest;
