import { useSelector } from "react-redux";
import Button from "./Button";
import Main from "./Main";

function App() {
  const count = useSelector((state) => state);

  return (
    <div className="App">
      <Button />
      <Main />
    </div>
  );
}

export default App;
