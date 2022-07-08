import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard fullName={"Doe, Jane"} age={45} hairColor={"Black"}></PersonCard>
      <PersonCard fullName={"Smith, John"} age={88} hairColor={"Brown"}></PersonCard>
      <PersonCard fullName={"Fillmore, Millard"} age={50} hairColor={"Brown"}></PersonCard>
      <PersonCard fullName={"Smith, Maria"} age={62} hairColor={"Brown"}></PersonCard>
    </div>
  );
}

export default App;
