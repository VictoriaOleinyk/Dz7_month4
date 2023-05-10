import { useState} from 'react';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Pokemon from './pages/PokemonInfo/Pokemon';

function App() {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme  = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }


    return (
        <div className={`app ${theme}`}>
            Pokemon project
            <button onClick={toggleTheme}>Change theme</button>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<MainPage />}  />
                    <Route path='/about-us' element={<AboutUs />}  />
                    <Route path='/pokemon/:name' element={<Pokemon />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;