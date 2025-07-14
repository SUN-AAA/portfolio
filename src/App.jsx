import './App.css';
import Background from './components/background';
import Profile from './components/profile';
import Header from './components/header';
import Nav from './components/nav';
import Aboutme from './components/aboutme';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Background/>
      <Profile/>
      <Aboutme/>
    </div>
  );
}

export default App;