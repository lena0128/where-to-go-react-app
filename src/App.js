import './App.css';
import Homepage from './components/Homepage';
import CityForm from './components/CityForm';
import CityList from './components/CityList'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Where to Trvel App!</h1>
      <Homepage />
      <CityForm />
      <CityList />
    </div>
  );
}

export default App;
