import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [color, setColor] = useState("");

  const handleButtonClick = (color) => {
    setColor(color);
    console.log(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      <div className="d-flex gap-2 justify-content-center py-5">
        <button type="button" className="btn btn-primary" onClick={() => handleButtonClick('blue')}>Blue</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('gray')}>Gray</button>
        <button type="button" className="btn btn-success" onClick={() => handleButtonClick('green')}>Green</button>
        <button type="button" className="btn btn-danger" onClick={() => handleButtonClick('red')}>Red</button>
        <button type="button" className="btn btn-warning" onClick={() => handleButtonClick('yellow')}>Yellow</button>
        <button type="button" className="btn btn-info" onClick={() => handleButtonClick('lightblue')}>Light Blue</button>
        <button type="button" className="btn btn-light" onClick={() => handleButtonClick('white')}>White</button>
        <button type="button" className="btn btn-dark" onClick={() => handleButtonClick('black')}>Black</button>
        <button type='button' className="btn" style={{ background: 'pink', color: 'white' }} onClick={() => handleButtonClick('pink')}>Pink</button>
        <button type='button' className="btn" style={{ background: 'darkkhaki', color: 'white' }} onClick={() => handleButtonClick('darkkhaki')}>Dark Khaki</button>
        <button type='button' className="btn" style={{ background: 'aqua', color: 'black' }} onClick={() => handleButtonClick('aqua')}>Aqua</button>
        <button type='button' className="btn" style={{ background: 'beige', color: 'black' }} onClick={() => handleButtonClick('beige')}>Beige</button>
      </div>
    </div>
  );
}

export default App;
