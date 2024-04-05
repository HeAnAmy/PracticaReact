import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  

  return (
    <div>
      <Header/> 
      <Home /> 
      <About />
    </div>
  );
};

export default App;
