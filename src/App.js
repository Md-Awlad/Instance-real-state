import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import AllServices from './component/AllServices/AllServices';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/services'>
        <AllServices></AllServices>
        </Route>
        <Route path='/about'>
        <About></About>
        </Route>
        <Route path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
