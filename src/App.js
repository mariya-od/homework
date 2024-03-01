import './App.css';
import { Lesson } from './Lesson';
import image from './daily.jpg';
import imageTwo from './pen.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={ image } width='200px' height='150px' alt='daily' />
      </div>

      <div className="container">
        <h1>Задания на дом</h1>
      </div>
      <Lesson />

      <div className="container">
        <img src={ imageTwo } width='200px' height='150px' alt='pen' />
      </div>
    </div>
  );
}

export default App;
