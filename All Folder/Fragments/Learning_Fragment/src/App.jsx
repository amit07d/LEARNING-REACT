import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
let foodItems =['chicken','Fish','coke' ,'chips' ,'mutton', 'Mango'];
  return (
    <>  
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item, index) => (
       <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
      </>
  );
}

export default App;
 