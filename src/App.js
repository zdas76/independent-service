
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Home/Blog/Blog';
import Home from './Components/Home/Home/Home';
import ServiceDetails from './Components/Home/ServiceDetails/ServiceDetails';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Shared/Login/Login';
import RequireAuth from './Components/Shared/Login/RequireAuth/RequireAuth';
import Signup from './Components/Shared/Signup/Signup';

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetails />
          </RequireAuth>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
