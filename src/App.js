import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import DashHome from './pages/admindashboard.page';
import DashUpload from './pages/adminupload.page';
import DashUsers from './pages/adminuser.page';
import DashSettings from './pages/adminsettings.page';
import Home from './pages/home.page';
import About from './pages/about.page';
import Services from './pages/services.page';
import Contact from './pages/contact.page';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element = {<Home/>} />
        <Route exact path='/about' element = {<About/>} />
        <Route exact path='/services' element = {<Services/>} />
        <Route exact path='/contact' element = {<Contact/>} />
        <Route exact path="/admin/dashboard" element={<DashHome/>} />
        <Route exact path="/admin/users" element={<DashUsers/>} />
        <Route exact path="/admin/upload" element={<DashUpload/>} />
        <Route exact path="/admin/settings" element={<DashSettings/>} />
      </Routes>
    </div>
  );
}

export default App;
