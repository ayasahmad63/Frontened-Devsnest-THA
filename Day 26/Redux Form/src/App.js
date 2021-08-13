
import './App.css';
import { Provider } from "react-redux"
import store from "./store"
import { Form } from './Components/Form';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
 
    
     <h2>Hello Redux</h2>
    <Form />
    
    </div>
    </Provider>

  );
}

export default App;
