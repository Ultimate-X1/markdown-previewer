import PreviewerMaster from "./components/previewer";
import store from "./redux/store";
import { Provider } from 'react-redux';
import './styles/app.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <PreviewerMaster />
    </div>
    </Provider>
    
  );
}

export default App;
