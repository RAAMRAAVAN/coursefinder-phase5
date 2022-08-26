import './App.css';
import {Provider} from "react-redux"
import store from './redux/store';
import UserContainer from './components/UserContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <Provider store={store}>  
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserContainer/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
