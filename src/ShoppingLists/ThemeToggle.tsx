/*
 * A ThemeToggle komponens felelős a téma váltásáért az alkalmazásban.
 * Egy gombot jelenít meg, amely lehetővé teszi a felhasználónak, hogy váltson világos és sötét mód között.
 * A gomb onClick eseménye az a prop, amit meg kell adni, a toggleTheme, ez fogja elkészíteni a témaváltást.
 */
const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? 'Világos módra váltás' : 'Sötét módra váltás'}
    </button>
  );
};

export default ThemeToggle; /* Komponens exportálása. */