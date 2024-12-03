import { useEffect, useState } from 'preact/hooks'; /* Importála a szükséges hook-okat. */
import LeftPane from './LeftPane/LeftPane'; /* Importála a LeftPane komponenst. */
import RightPane from './RightPane/RightPane'; /* Importála a RightPane komponenst. */
import './ShoppingLists.less'; /* Importálja a ShoppingLists-hez tartozó CSS-t. */ 

const ShoppingLists = ({ loggedInUser, onLogout }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); /* Sötét mód állapota. */
  const [selectedList, setSelectedList] = useState(null); /* Kiválasztott bevásárlólista állapota. */
  const [isMobileView, setIsMobileView] = useState(false); /* Mobilos nézet állapota. */

  /*
   * A useEffect figyeli az ablak méretét és frissíti ennek megfelelően az isMobileView állapotot.
   * Ha az ablak szélessége 768 pixelnél kisebb akkor aktiválódk a mobilnézet. 
   * Hozzáad az ablakhoz egy eseménykezelőt, és futtatja is a handleResize függvényt a kezdeti állapot beállításához.
   * Tisztítja az eseménykezelőt ha a komponens eltávolításra kerül.
   * Viszont a useEffect a [] miatt csak egyszer fut le a komponens első betöltődésekor.
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /*
   * A toggleTheme funkció kezeli a téma váltását (sötét/világos mód).
   * A setIsDarkMode segítségével lehet váltani a módok között.
   */
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  /*
   * Először egy div elem látható, aminek az osztályneve attól függ, hogy az alkalmazás sötét módban van-e.
   * Megnézi, hogy mobilnézet van-e, és ha igen, továbbá ha van kiválaszott bevásárlólista akkor RightPane komponenst használ.
   * A RightPane a következő adatokat kapja: a téma beállítása, a kiválasztott bevásárlólista, a témaváltozást végző függvény és a kijelentkezéshez szükséges függvény.
   * Ha viszont nincs kiválaszott lista akkor a következő adatokat kapja a LeftPane: a bevásárlólistákat tartalmazó tömb, a sötét mód aktuális állapota, a bejelentkezett felhasználó adatai és egy függvény ami segít kiválasztani a bevásárlólistát.
   * Ha nem mobilnézet van akkor pedig mindkét komponenst megjeleníti a már említett adatokkal.
   */ 
  return (
    <div className={`shopping-lists-layout ${isDarkMode ? 'dark' : 'light'}`}>
      {isMobileView ? (
        selectedList ? (
          <RightPane 
            isDarkMode={isDarkMode}
            selectedList={selectedList}
            toggleTheme={toggleTheme}
            onLogout={onLogout}
          />
        ) : (
          <LeftPane 
            shoppingLists={[]} 
            isDarkMode={isDarkMode}
            loggedInUser={loggedInUser}
            setSelectedList={setSelectedList}
          />
        )
      ) : (
        <>
          <LeftPane 
            shoppingLists={[]} 
            isDarkMode={isDarkMode}
            loggedInUser={loggedInUser}
            setSelectedList={setSelectedList}
          />
          <RightPane 
            isDarkMode={isDarkMode}
            selectedList={selectedList}
            toggleTheme={toggleTheme}
            onLogout={onLogout}
          />
        </>
      )}
    </div>
  );
};

export default ShoppingLists; /* A komponens exportálása */
