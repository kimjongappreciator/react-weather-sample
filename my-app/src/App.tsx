//import "./App.css";

import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import Home from "./components/views/home";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
        <Home></Home>
      </ThemeProvider>
    </>
  );
}

export default App;
