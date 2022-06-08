import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import HomePage from './Pages/HomePage';
import MyProjects from './Pages/MyProjects';
import Navbar from './Pages/Navbar';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>


    <Routes>
        <Route path='/' element= {<HomePage></HomePage>}></Route>
        <Route path='/myprojects' element= {<MyProjects></MyProjects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

    </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
