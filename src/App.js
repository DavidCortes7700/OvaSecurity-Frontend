import 'styles/styles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Login} from 'pages/Login';
import {Register} from 'pages/Register';
import { Password_recovery } from 'pages/Password_recovery';
import { Code_recuest } from 'pages/Code_recuest';

function App() {
  

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/password-recovery" element={<Password_recovery />} />
          <Route path="/code-recuest" element={<Code_recuest />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
