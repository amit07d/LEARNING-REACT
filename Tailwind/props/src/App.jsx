import './App.css'
import Card  from './Components/Card';

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        TailWind-Learning
      </h1>
      <br />
      <Card username="ChaiaurCode" btnText={'click me now'} />
      <Card username="CoffeeAurCode" btnText= "vist Now"/>
    </>
  );
}

export default App;
