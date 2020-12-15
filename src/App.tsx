import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/quiz'>
        <QuizPage />
      </Route>
    </Router>
  );
}

export default App;
