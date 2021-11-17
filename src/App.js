import './App.css';
import Home from './component/Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './component/Shared/Header/Header';
import Footer from './component/Shared/Footer/Footer';
import Explore from './component/Pages/Explore/Explore';
import Login from './component/Pages/Login/Login';
import Signup from './component/Pages/Signup/Signup';
import ContextProvider from './component/ContextProvider/ContextProvider';
import PlaceOrder from './component/Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Myorder from './component/Pages/Myorders/Myorder';
import UserReview from './component/Pages/UserReview/UserReview';
import Pay from './component/Pages/Pay/Pay';
import MakeAdmin from './component/Pages/MakeAdmin/MakeAdmin';
import AdminRoute from './component/AdminRoute/AdminRoute';
import AddProduct from './component/Pages/AddProduct/AddProduct';
import ManageProduct from './component/Pages/ManageProducts/ManageProduct';

function App() {
  return (
      <ContextProvider>
      <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/explore'>
        <Explore></Explore>
      </Route>
      <Route path='/login'>
       <Login></Login>
      </Route>
      <Route path='/signup'>
      <Signup></Signup>
      </Route>
      <PrivateRoute path='/place-order/:id'>
      <PlaceOrder></PlaceOrder>
      </PrivateRoute>
      <PrivateRoute path='/my-order'>
     <Myorder></Myorder>
      </PrivateRoute>
      <PrivateRoute path='/user-review'>
     <UserReview></UserReview>
      </PrivateRoute>
      <PrivateRoute path='/payment'>
     <Pay></Pay>
      </PrivateRoute>
      <AdminRoute path='/make-admin'>
     <MakeAdmin></MakeAdmin>
      </AdminRoute>
      <AdminRoute path='/add-product'>
     <AddProduct></AddProduct>
      </AdminRoute>
      <AdminRoute path='/manage-products'>
     <ManageProduct></ManageProduct>
      </AdminRoute>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
   </ContextProvider>
  );
}

export default App;
