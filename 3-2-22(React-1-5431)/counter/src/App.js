// import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter.js"
import CounterPrtc from './components/CounterPrtc';

function App() {
  return (
    <div className="App">
    <Counter name = "Counter 1"/>
    
    {/* <CounterPrtc name = "1st" /> */}
    
    </div>
  );
}

export default App;
