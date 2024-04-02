import ThemeContextProvider from "./store/ThemeContextProvider";
import Page from "./components/theme/Page.jsx";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
