import './App.scss';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Navigation from './components/navigation/Navigation';
import AddStaff from './components/dashboard/AddStaff';
import EditStaff from './components/dashboard/EditStaff';
import Login from './components/login/Login';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const handleLogout = () => {
    setData(null);
  }
  return (
    <div className="App">
      <Navigation data={data} handleLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/dashboard' element={
          <Dashboard
          data={data} />
        }>
        </Route>
        <Route path='/dashboard/add' element={
          <AddStaff
          data={data} />
        }>
        </Route>
        <Route path='/dashboard/edit/:id' element={
          <EditStaff
          data={data} />
        }>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/login' element={<Login setData={setData} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
