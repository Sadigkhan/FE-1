import "./App.css";
import { BasketProvider } from "./contexts/BasketContext";
import { AuthProvider } from "./contexts/authContext";
import { MainRouter } from "./router";

function App() {
  return (
    <AuthProvider>
      <BasketProvider>
        <MainRouter />
      </BasketProvider>
    </AuthProvider>
  );
}

export default App;
