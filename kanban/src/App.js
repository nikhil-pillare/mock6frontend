import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './routes/mainroutes';
import Nav from './components/nav';
function App() {
  return (
    <div className="App">
    <Nav/>
    <MainRoutes/>
    </div>
  );
}

export default App;
