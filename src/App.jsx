import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import { DetialNews } from './components/detialNews';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
   <Router>
    <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/detialnews/:id' component={DetialNews}/>
      </Switch>
      <Footer />
   </Router>
   </>
  );
}

export default App;
