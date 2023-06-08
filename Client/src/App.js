import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import Header from "./components/Header/Header.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

   const email = 'diego@gmail.com';
   const password = 'asd123';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   
   function login(userData) {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() =>{
      !access && navigate("/")
   }, [access, navigate])

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const charactersFilt = characters.filter(character => character.id !== parseInt(id));
      setCharacters(charactersFilt);
   }

   return (
      <div className="App">
         {
            location.pathname !== "/"
            ? <Nav onSearch={onSearch}/>
            : null
         }
         {
            location.pathname !== "/about" && location.pathname !== "/"
            ? <Header/>
            : null
         }

      <hr className="hrTop"/>
      <Routes>
         <Route path="/" element={<Form login={login}/>}/>

         <Route path="/favorites" element={<Favorites />}/>

         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>

         <Route path="/about" element={<About/>}/>

         <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
      <hr className="hrBottom"/>
      {
            location.pathname !== "/"
            ? <Footer/>
            : null
         }
      
      </div>
   );
}

export default App;
