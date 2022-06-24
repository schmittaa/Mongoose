import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavBar from './components/NavBar'
import ManageContact from './components/ManageContact';
import ListContact from './components/ListContact';
import NotFound from './components/NotFound';
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ManageContacts" element={<ManageContact/>} />
        <Route path="/listContact" element={<ListContact/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
