import logo from './logo.svg';
import './App.css';
import { Card } from './ETP projects/Card_on_webpage';
import { Newspage } from './ETP projects/news_page';
import sampleNews from './ETP projects/sampleNews.json';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './ETP projects/home';
import Contact from "./ETP projects/contact";
import Register from "./ETP projects/register";
import Login from "./ETP projects/login";
import About from "./ETP projects/about";
import { Navbar } from './ETP projects/navbar';
function App() {
  return (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Newspage inputdata={sampleNews} />}></Route>
      <Route path='/RegisterPage' element={<Register />}></Route>
      <Route path='/LoginPage' element={<Login />}></Route>
      <Route path='/AboutPage' element={<About />}></Route>
      <Route path='/ContactPage' element={<Contact />}></Route>
    </Routes>
  </div>
  )
}
export default App;
