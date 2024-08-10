import logo from './logo.svg';
// import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Service from './component/service/Service';
import ServiceSection from './component/Sub';

function App() {
  return (
    <div >
      <div>
      <Header />
      <div className="home-section">
        <Home />        
      </div>
      {/* <div className="service-section"> */}
        {/* <Service />         */}
        <ServiceSection />
      {/* </div>       */}
    </div>
    </div>
  );
}

export default App;
