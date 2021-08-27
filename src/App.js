import "./App.css";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="container">
      <div className="heading">Redux Stopwatch</div>
      <Provider store={store}>
        <Stopwatch />
      </Provider>
    </div>
  );
}

export default App;
