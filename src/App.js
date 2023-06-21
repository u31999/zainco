import './App.css';
import HomePage from './pages/HomePage';
import Menu from './component/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <HomePage />
    </div>
  );
}

export default App;
