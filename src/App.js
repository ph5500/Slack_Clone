import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <header>Whatsup fools</header>
      <Header />
      <div app className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
