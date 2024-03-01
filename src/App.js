// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import Products from './Products';

function App() {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/products" element={<Products />} />
        </Routes>  
        </>
    );
}

export default App;
