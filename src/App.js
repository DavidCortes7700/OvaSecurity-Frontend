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
import ActivitiesTeacher from 'pages/teacher/ActivitiesTeacher';
import BooksTeacher from 'pages/teacher/BooksTeacher';
import LegalFrameworkTeacher from 'pages/teacher/LegalFrameworkTeacher';
import ProfileTeacher from 'pages/teacher/ProfileTeacher';
import VideosTeacher from 'pages/teacher/VideosTeacher';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/password-recovery" element={<Password_recovery />} />
          <Route path="/code-recuest" element={<Code_recuest />} />
          <Route path="/activities-teacher" element={<ActivitiesTeacher/>}/>
          <Route path='/books-teacher' element={<BooksTeacher/>}/>
          <Route path='/legalFramework-teacher' element={<LegalFrameworkTeacher/>}/>
          <Route path='/profile-teacher' element={<ProfileTeacher/>}/>
          <Route path='/videos-teacher' element={<VideosTeacher/>}/>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
