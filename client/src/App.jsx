import Canvas from "./Canvas"; //folder
import Customizer from "./pages/Customizer"; //page
import Home from "./pages/Home"; //page

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
