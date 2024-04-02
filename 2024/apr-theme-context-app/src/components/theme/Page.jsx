import { useContext } from "react";  
import { ThemeContext } from "../../store/ThemeContext";

export default function Page() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div id="app" className={theme}>
      <header>
        <h1>Context Demo</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>

      <article>
        <h2>Context in React</h2>
        <p>
          This example will show you to use Context!
        </p>
      </article>
    </div>
  );
}
