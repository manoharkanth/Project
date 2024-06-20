import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Admission from './Components/Admissionenquiry/Admission';
import Faculty from './Components/Faculty/Faculty';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>}   />
      <Route path='admission' element={<Admission/>}/>
      <Route path='faculty' element={<Faculty/>}/>
      <Route path='about' element={<About/>}/>



    </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
