import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ServiceInfo from './component/ServiceInfo/ServiceInfo';
import ProvideAuth from './ProvideAuth/ProvideAuth';

function App() {
  return (
    <div className="App">
     <ProvideAuth>
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
    
    <PrivateRoute path="/service-info/:serviceid">
      <ServiceInfo></ServiceInfo>
    </PrivateRoute>
    <PrivateRoute path="/about">
    <About></About>
    </PrivateRoute>
    <PrivateRoute path="/contact">
    <Contact></Contact>
    </PrivateRoute>
    <Route path="*">
      <NotFound></NotFound>
    </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </ProvideAuth>
    </div>
  );
}
export default App;
