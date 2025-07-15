import './App.css';
import Home from "./pages/home";
import Profile from "./pages/profile";
import Aboutme from "./pages/aboutme";
import Project from "./pages/project";

function App() {
  return (
    <div className="App">
      <Home/>
      <Profile/>
      <Aboutme/>
      <Project/>
    </div>
  );
}

export default App;