import './App.css';
import { Settlement } from "./components/Settlement";

function App() {
  return (
    <div className="App">
      <Settlement formTitle="Settlement Form" onSave={(amount) => console.log('Save clicked with amount:', amount)} />
    </div>
  );
}

export default App;
