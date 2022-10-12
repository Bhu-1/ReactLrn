
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Company from './Component/Company';
import Contact from './Component/Contact';
import Filter from './Component/Filter';
import Home from './Component/Home';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import Other from './Component/Other';
import Page404 from './Component/Page404';
import Protected from './Component/Protected';
import User from './Component/User';

function App() {
  return (
    <div className="App">
      <h1>This is the Route Learnings</h1>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Protected Component={Home} />}/>
          <Route path='/about' element={<Protected Component={About}/>} />
          <Route path='/filter' element={<Protected Component={Filter}/>}/>
          {/* <Route path='/*' element={<Page404/>} /> */}
          <Route path='/*' element={<Navigate to="/"/>}/>
          <Route path='/user/:name' element={<User/>} />
          <Route path='/contact' element={<Contact/>}>
            <Route path='company' element={<Company/>} />
            <Route path='other' element={<Other/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
