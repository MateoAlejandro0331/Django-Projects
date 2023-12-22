import NavBar from "./components/NavBar";
import Students from "./components/Students";
import CreateStudent from "./components/CreateStudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen bg-slate-500">
        <NavBar />
        <Routes>
          <Route path='/' element={<Students />} />
          <Route path='/create' element={<CreateStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
