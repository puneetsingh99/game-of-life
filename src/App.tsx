import "./App.css";
import { Grid } from "./components/Grid";

const DEFAULT_CELL_SIZE_IN_PX = 20;

function App() {
  return <Grid cellSize={DEFAULT_CELL_SIZE_IN_PX} />;
}

export default App;
