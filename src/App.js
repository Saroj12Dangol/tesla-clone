import "./App.css";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <Routes>
        <Route path="/Model-S" element={<App />}/>
      </Routes>
    </div>
  );
}

export default App;
