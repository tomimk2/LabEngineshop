
import './App.css';
import CardContainer from './components/cardcontainer/CardContainer';
import Navbar from './components/navbar/navbar';
import ItemCount from "./components/itemCounter/ItemCount";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <CardContainer></CardContainer>
      <ItemCount ></ItemCount>
      <div>
      </div>
    
    </div>
  );
}

export default App;
