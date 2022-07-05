import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signup/signup';
import SignIn from './pages/signin/signin';
import Header from './component/header/header';
import TakeNoteOne from './component/takenoteone/takenoteone';
import TakeNoteTwo from './component/takenotetwo/takenotetwo';
import Dashboard from './pages/dashboard/dashboard';
import { Provider } from 'react-redux';
import store from './component/redux/store';
import Router from './router/router';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;
