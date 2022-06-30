import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signup/signup';
import SignIn from './pages/signin/signin';
import Header from './component/header/header';
import TakeNoteOne from './component/takenoteone/takenoteone';
import TakeNoteTwo from './component/takenotetwo/takenotetwo';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <Header/>
      <TakeNoteOne/>
      <TakeNoteTwo/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
