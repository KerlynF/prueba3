import './App.css';
import Button from './Components/Button.js'
import './StyleSheets/container.css'


function App() {
  return (
    <div className="App">
      
      <div className='button-container'>
        <Button text='7' isButtonClick={true} />
      </div>
    </div>
  );
}

export default App;
