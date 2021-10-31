import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProviders from './component/AuthProvider/AuthProvider';
import Footer from './component/Pages/Footer/Footer';
import Header from './component/Pages/Header/Header';
import Home from './component/Pages/Home/Home';
import Login from './component/Pages/Login/Login';
import ManageOrder from './component/Pages/ManageOrder/ManageOrder';
import MyOrders from './component/Pages/MyOrders/MyOrders';
import PlaceOrer from './component/Pages/PlaceOrder/PlaceOrer';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProviders>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path="/place-order/:id">
          <PlaceOrer></PlaceOrer>
        </PrivateRoute>
        <PrivateRoute path="/my-order">
        <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path="/manage-order">
        <ManageOrder></ManageOrder>
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProviders>
    </div>
  );
}

export default App;
