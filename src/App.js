import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import Home from './components/Home'
import Cryptocurrencies from './components/Cryptocurrencies';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from "react";
import LoadingBar from "react-top-loading-bar";
function App() { 
  const [progress,setProgress] = useState(0);
  return (
    <>
    <Router>
    <Navbar/>
    <LoadingBar
    height={3}
    color='rgb(8, 137, 181)'
    progress={progress} 
   />
    <Routes>
      <Route path="/" element={<Home setProgress={setProgress}/>}/>
      <Route path="/crypto" element={<Cryptocurrencies setProgress={setProgress}/>}/>
      <Route path="/News" element={<News setProgress={setProgress}/>}/>
    </Routes>
    
    </Router>
    </>
   
  );
}

export default App;
