import { useState, useEffect } from 'preact/hooks'; /* Importálja a szükséges hook-okat. */
import './RightPane.less'; /* Importálja a RightPane komponens stílusát tartalmazó CSS-t. */
import ItemsSpace from './Item/ItemsSpace'; /* Importálja az ItemsSpace komponenst, amely megjeleníti a termékeket a listában. */
import PopUpAddItemWindow from './Item/PopUpAddItemWindow'; /* Importálja az új elem hozzáadására szolgáló PopUpAddItemWindow komponenst. */
import { shoppingService } from '../ShoppingService'; /* Importálja a shoppingService-t, amely felelős az adatok kezeléséért. */
import ThemeToggle from '../ThemeToggle'; /* Importálja a ThemeToggle komponenst a témaváltáshoz. */
import Logout from './Logout';

const RightPane = ({ isDarkMode, selectedList, toggleTheme, onLogout }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); /* Az ablak megjelenésének kezelése (ha nyitva van). */
  const [currentList, setCurrentList] = useState(selectedList); /* A kiválasztott lista kezelése. */

  /*
   * A useEffect hook figyeli a selectedList változását.
   * Ha a selectedList változik, frissíti a currentList értékét.
   */
  useEffect(() => {
    setCurrentList(selectedList || { id: null, name: 'Nincs lista', item: [] });
  }, [selectedList]);

  /*
   * A handleAddItemClick függvény megnyitja az új elem hozzáadására szolgáló popup-ot.
   */
  const handleAddItemClick = () => {
    setIsPopupOpen(true);
  };

  /*
   * A handleCancel bezárja az új elem hozzáadására szolgáló popup-ot.
   */
  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  /*
   * A handleOk függvény felelős az új elem hozzáadásáért a kiválasztott listához.
   * Ellenőrzi, hogy van-e kiválasztott lista, majd hozzáadja az új elemet a listához, megfelelő id generálásával.
   * Az új lista frissítése után bezárja a popup-ot.
   */
  const handleOk = (newItem) => {
    if (!currentList || !currentList.id) {
      alert('Nincs kiválasztott lista!');
      return;
    }
    shoppingService.addItemToList(currentList.id, newItem);
    const updatedList = {
      ...currentList,
      item: [...(currentList.item || []), newItem],
    };
    setCurrentList(updatedList);
    setIsPopupOpen(false);
  };

  /*
   * A right-pane is a témának megfelelően dinamikusan változik, hogy melyik stílust használja.
   * Megjelenít egy gombot, ami az add-item-button CSS osztályt használja és gombnyomásra a handleAddItemClick-et hívja meg.
   * Ezután következik a konténer, ami megjeleníti a kiválaszott lista termékeit.
   * Van egy PopUpAddItemWindow komponens ami az alábbi adatokat kapja:
   * Show, ami meghatározza, hogy látható-e, sötét mód meghatározása, hogy milyen függvények hívódjanak meg onCancel és onOk esetén, valamint a kiválasztott lista id-ja.
   * Ezen kívül van még egy témaválasztó gomb, és egy gomb ami a kijelentkezésért felel.
   */
  return (
    <div className={`right-pane ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Bevásárlólista: {currentList ? currentList.name : 'Nincs kiválasztva'}</h2>
      {currentList && (
        <>
          <div className="button-container">
            <button className="add-item-button" onClick={handleAddItemClick}>
              Új elem hozzáadása
            </button>
          </div>
          <div className="items-space-container">
            <ItemsSpace selectedList={currentList} isDarkMode={isDarkMode}  />
          </div>
          {currentList && (
            <PopUpAddItemWindow
              show={isPopupOpen}
              isDarkMode={isDarkMode}
              onCancel={handleCancel}
              onOk={handleOk}
              selectedListId={currentList.id}
            />
          )}
        </>
      )}
      <div className="theme-toggle">
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </div>
        <Logout onLogout={onLogout} />
    </div>
  );
};

export default RightPane; /* Komponens exportálása. */
