import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Header></Header>
     <Switch>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route path="/home">
    <Home></Home>
    </Route>
    <Route path="/login">
    <Login></Login>
    </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}
export default App;
