import NavBar from "./components/NavBar";
import { HostsTable, CreateHost } from "./components/hosts";
import { GuestsTable, CreateGuest } from "./components/guest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchView from "./components/match/matchview/MatchView";
import Match from "./components/match/Match";


const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen bg-slate-500">
        <NavBar />
        <Routes>
          <Route path='/' element={<HostsTable />} />
          <Route path='/CreateHost' element={<CreateHost />} />
          <Route path='/guest' element={<GuestsTable/>} />
          <Route path='/CreateGuest' element={<CreateGuest />} />
          <Route path='/match' element={<Match />} />
          <Route path='/matchview' element={<MatchView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
