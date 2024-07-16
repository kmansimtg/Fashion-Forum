import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SavePos from './components/SavePos';
import Quora from './components/Quora';
import RewardsPage from './components/RewardsPage';
//import { Leaderboard } from '@mui/icons-material';
import Leaderboard from './components/LeaderBoardComp';
import QHeader from './components/QHeader';
function App() {
  return (
   
    <div className="App">
     
     <Header></Header>
     <Quora></Quora>
    </div>
  );
}

export default App;
