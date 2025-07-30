import './App.css';
import Home from "./pages/home";
import Profile from "./pages/profile";
import Aboutme from "./pages/aboutme";
import Project from "./pages/project";
import GwangjuWeather from './components/GwangjuWeather';

function App() {
  return (
    <div className="App">
      <Home/>
      <Profile/>
      <Aboutme/>
      <Project/>
      <GwangjuWeather />
    </div>
  );
}

export default App;