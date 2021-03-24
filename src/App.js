import './App.css';
import{ BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header';
import MainFooter from './components/MainFooter';
import SwitchLink from './components/SwitchLink';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <SwitchLink/> 
        <MainFooter/>
      </Router>
    </div>
  );
}

export default App;
