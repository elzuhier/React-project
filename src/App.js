import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

import { BrowserRouter as Router, 
  Switch, 
  Route,
   Link 
  } 
from "react-router-dom";
import Movies from './Movies/movies';
import moviedetails from './Movies/moviedetails';

function App() {
  return (
    <div className="App">
      <>

      <div className='container' >
      <Router>
        <Header/>
      <Switch>
        <Route path="/movie/popular" exact component={Movies}/>
        <Route path="/movie/:id" exact component={moviedetails}/>

        </Switch>
      </Router>
      </div>
      </>
    </div>
  
  );
}

export default App;
