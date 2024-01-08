import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div className="row side-home">
          <div className="home-sidebar col-sm-2">
            <Sidebar />
          </div>
          <div className="home-main col-sm-9">
            <Home />
          </div>
        </div>
        <div className='home-right-sidebar col-sm-1'>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
