import Card from "./components/Card";
import Header from "./components/Header";
import SkipList from "./components/Skip";
import { SkipsProvider } from "./contexts/SkipContext";

function App() {
  return (
    <SkipsProvider>
      <Header />
      <SkipList />
    </SkipsProvider>
  );
}

export default App;
