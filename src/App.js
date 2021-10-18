import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Banner from './component/Home/Banner/Banner';
import Doctors from './component/Home/Doctors/Doctors';
import Service from './component/Home/Service/Service';
import Testimonial from './component/Home/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <Service></Service>
     <Doctors/>
     <Testimonial/>
     <Footer></Footer>
    </div>
  );
}
export default App;
