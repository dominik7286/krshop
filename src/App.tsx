import { useState, useEffect } from 'preact/hooks'; /* Importála a szükséges hook-okat. */
import ShoppingLists from './ShoppingLists/ShoppingLists'; /* Importálja bevásárló listák komponenst. */
import Login from './Login/Login'; /* Importálja a bejelentkezési komponenst. */
import Registration from './Registration/Registration'; /* Importálja a regisztrációs komponenst. */
import './App.less'; /* Az App-hoz tartozó less fájl importálása. */ 
import ThemeToggle from './ShoppingLists/ThemeToggle'; /* Importálja a témaváltó komponenst. */

const App = () => {
  const [currentView, setCurrentView] = useState('login'); /* Ez a kezdeti nézet: bejelentkezés. */
  const [isAuthenticated, setIsAuthenticated] = useState(false); /* Ez a felhasználó hitelesítése. */
  const [loggedInUser, setLoggedInUser] = useState(null); /* Ez tárolja hogy a felhasználó bejelentkezett-e. */
  const [isDarkMode, setIsDarkMode] = useState(true); /* Sötét mód állapota. */

  /*
   * A useEffect minden alkalommal lefut, amikor az isDarkMode változik.
   * Ha az isDarkMode true, akkor a dokumentum törzséhez hozzáadódik a dark-mode osztály.
   * Ha az isDarkMode false, akkor a light-mode osztály kerül hozzáadásra.
   */ 
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  /*
   * Sikeres bejelentkezés esetén a hitelesítés igaz lesz.
   * A felhasználó be lesz jelentkezve a megadott felhasználónévvel.
   * És a shopping-lists nézete fog megjelenni.
   */
  const handleLoginSuccess = (username) => {
    setIsAuthenticated(true); 
    setLoggedInUser(username); 
    setCurrentView('shopping-lists'); 
  };

  /*
   * Sikertelen bejelentkezés esetén a hitelesítés hamis.
   * A felhasználó nincs bejelentkeztetve.
   * És a bejelentkezés oldal jelenjen meg újra.
   */
  const handleLogout = () => {
    setIsAuthenticated(false); 
    setLoggedInUser(null); 
    setCurrentView('login');
  };

  /*
   * A témaváltásért felel, módosítja a hátteret, annak alapján, hogy az isDarkMode-nak mi volt az utolsó értéke.
   */
  const toggleTheme = () => {
    localStorage.removeItem('item');
    setIsDarkMode((prev) => !prev); 
  };

  /*
   * Egy feltételben nézi meg, hogy a jelenlegi nézet a login nézete-e és hogy a felhasználó hitelesítve van-e.
   * Ha igen, akkor megjelenik egy kép, a bejelentkezés szöveg, és a Login komponens, ami egy bejelentkezési űrlapot tartalmaz.
   * Átadja a setCurrentView függvényt a nézet váltásáért és az onLoginSuccess-t a bejelentkezés sikerességének ellenőrzéséért.
   * Ha nem igaz az első feltétel a regisztrációs nézet jelenik meg ugyanezzel a felépítéssel.
   * A különbség miindössze annyi, hogy a Registration komponens csak a setCurrentView-t kapja meg, hogy regisztráció után a megfelelő nézetre lehessen váltani.
   * Egyébként pedig a ShoppingLists komponenst jeleníti meg, átadva a bejelentkezett felhasználót, a setCurrentView-t és a kijelentkezés kezelését.
   * Ha még bejelentkezés nem történt meg, alul legyen egy gomb, ami az onclick-jében megkapja a toggleTheme függvényt a témaváltás kezelésére.
   * A gomb szövege pedig az éppen aktuális téma alapján jelenik meg.
   */
  return (
    <div className="app">
      {currentView === 'login' && !isAuthenticated ? (
        <>
          <img src="./Images/shopping-cart.png" alt="Shopping Cart" className="logo" />
          <h2>Bejelentkezés</h2>
          <Login setCurrentView={setCurrentView} onLoginSuccess={handleLoginSuccess} />
        </>
      ) : currentView === 'registration' ? (
        <>
          <img src="./Images/shopping-cart.png" alt="Shopping Cart" className="logo" />
          <h2>Regisztráció</h2>
          <Registration setCurrentView={setCurrentView} />
        </>
      ) : (
        <ShoppingLists 
          loggedInUser={loggedInUser} 
          onLogout={handleLogout} 
        />
      )}
      {(currentView === 'login' || currentView === 'registration') && (
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      )}
    </div>
  );
};

export default App; /* Komponens exportálása. */