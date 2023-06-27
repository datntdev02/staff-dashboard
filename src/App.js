import './App.scss';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Navigation from './components/navigation/Navigation';
import AddStaff from './components/dashboard/AddStaff';
import EditStaff from './components/dashboard/EditStaff';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/add' element={<AddStaff />}></Route>
        <Route path='/dashboard/edit/:id' element={<EditStaff/>}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
