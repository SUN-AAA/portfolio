import './App.css';
import Background from './components/background';
import Profile from './components/profile';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Background/>
      <Profile/>
    </div>
  );
}

export default App;