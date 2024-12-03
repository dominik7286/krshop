import { useState, useEffect } from 'preact/hooks'; /* Importálja a szükséges hook-okat. */
import PopUpAddWindow from './ShoppingList/PopUpAddWindow'; /* Importálja az új lista hozzáadására szolgáló PopUpAddWindow komponenst. */
import PopUpDeleteWindow from './ShoppingList/PopUpDeleteWindow'; /* Importálja a lista törlésére szolgáló PopUpDeleteWindow komponenst. */
import ShoppingList from './ShoppingList/ShoppingList'; /* Importálja az egyes bevásárlólisták megjelenítéséhez szükséges ShoppingList komponenst. */
import './LeftPane.less'; /* Importálja a LeftPane komponens stílusát tartalmazó CSS-t. */

const LeftPane = ({ shoppingLists, isDarkMode, loggedInUser, setSelectedList }) => {
  const [searchTerm, setSearchTerm] = useState(''); /* Keresés állapota. */
  const [showAddPopup, setShowAddPopup] = useState(false); /* Új lista hozzáadása ablak állapota. */
  const [showDeletePopup, setShowDeletePopup] = useState(false); /* Bevásárlólista törlése ablak állapota. */
  const [listToDelete, setListToDelete] = useState(null); /* Törlendő lista azonosítója. */
  const [listToEdit, setListToEdit] = useState(null); /* Szerkesztendő lista adatai. */
  const [localShoppingLists, setShoppingLists] = useState([]); /* Helyi bevásárlólisták állapota. */

  /*
   * A useEffect segítségével a helyi tárhelyből beolvasásra kerülnek a bevásárlólisták.
   * Csak a bejelentkezett felhasználóhoz tartozó listákat szűri le, és ezeket állítja be a helyi állapotba.
   */
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('shoppingLists') || '[]');
    const userLists = storedLists.filter(list => list.owner === loggedInUser);
    setShoppingLists(userLists);
  }, [loggedInUser]);

  /*
   * A handleSearchInput függvény kezeli a keresőmező beviteli eseményét, és frissíti a keresési kifejezést.
   */
  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  /*
   * A handleAddNewList metódus beállítja az új lista hozzáadására szolgáló állapotot, vagyis hogy nem szerkezstésre kerül, majd megjeleníti a megfelelő ablakot.
   */
  const handleAddNewList = () => {
    setListToEdit(null); 
    setShowAddPopup(true);
  };

  /*
   * A handleEditList függvény beállítja a szerkesztendő lista adatait, és megjeleníti az ablakot.
   */
  const handleEditList = (list) => {
    setListToEdit(list); 
    setShowAddPopup(true);
  };

  /*
   * handlePopupCancel bezárja az új lista hozzáadására vagy szerkesztésére szolgáló ablakot és a szerkesztés állapotát is beállítja.
   */
  const handlePopupCancel = () => {
    setShowAddPopup(false);
    setListToEdit(null); 
  };

  /*
   * A handlePopupOk függvény menti az új vagy szerkesztett lista adatait, frissíti a helyi tárhelyet és az állapotot.
   * Lekéri a listákat a localStorgae-ból.
   * Ha a lista szerkesztését kérte a felhasználó, végigiterál a listákon addig amíg meg nem találja a szerkesztettet és az új tartalommal frissíti a listát.
   * Ha nem szerkesztett a felhasználó, akkor létrehoz egy új objektumot, ami tartalmazza az adatokat, a lista létrehozóját, azonosítóját és egy item tömböt a lista termékeinek.
   * Frissíti a localStorage-t a létrehozott vagy módosított adatokkal.
   * Szűr újra hogy csak a bejelentkezett felhasználó listái jelenjenek meg, a popup-ot bezárja és a szerkesztés állapotát is beállítja.
   */
  const handlePopupOk = (newListData) => {
    const storedLists = JSON.parse(localStorage.getItem('shoppingLists') || '[]'); 
    let updatedLists;
  
    if (listToEdit) {
      updatedLists = storedLists.map((list) =>
        list.id === listToEdit.id ? { ...list, ...newListData } : list
      );
    } else {
      const completeListData = {
        ...newListData,
        owner: loggedInUser,
        id: Date.now(),
        item: [],
      };
      updatedLists = [...storedLists, completeListData];
    }
  
    localStorage.setItem('shoppingLists', JSON.stringify(updatedLists));
    setShoppingLists(updatedLists.filter(list => list.owner === loggedInUser));
    setShowAddPopup(false);
    setListToEdit(null);
  };
  
  const confirmDelete = () => {
    const storedLists = JSON.parse(localStorage.getItem('shoppingLists') || '[]'); // Összes lista beolvasása
    const updatedLists = storedLists.filter((list) => list.id !== listToDelete); // Csak a törlendő lista eltávolítása
  
    localStorage.setItem('shoppingLists', JSON.stringify(updatedLists));
    setShoppingLists(updatedLists.filter(list => list.owner === loggedInUser)); // Csak a bejelentkezett felhasználó listáit jelenítjük meg
    setShowDeletePopup(false);
  };

  /*
   * A handleDeleteList függvény beállítja a törlendő lista azonosítóját, és megjeleníti a törlés megerősítése ablakot.
   */
  const handleDeleteList = (id) => {
    setListToDelete(id);
    setShowDeletePopup(true);
  };

  /*
   * A handleListClick függvény beállítja a kiválasztott listát.
   */
  const handleListClick = (list) => {
    setSelectedList(list);
  };

  /*
   * Az első elem egy div, ez dinamikusan állítja be a panel megjelenítését az isDarkMode értéke alapján.
   * A következő egy keresőmező, ami value-ként a searchTerm értéket jeleníti meg.
   * onInput-nak pedig a handleSearchInput függvényt kapja meg.
   * A következő elem a listákat tartalmazó konténer, ami azon listákat jeleníti meg, amik a bejelentkezett felhasználóhoz tartoznak és amelyek megegyeznek a keresőmezőbe írt szöveg egy részével.
   * Ezen kiszűrt elemeket már map segítsével egy-egy ShoppingList komponenssel jelenít meg. 
   * A ShoppingList az alábbiakat tartalmazza: egyedi érték, a lista adatai, a törléshez és szerkesztéshez tartozó függvény, valamint egy függvény, ami kattintásra hívódik meg.
   * Ezen kívül még két komponenst ad az ablakhoz.
   * A PopUpAddWindow a következő adatokat kapja: show, ami meghatározza, hogy az ablak látható-e, sötét mód állapota, listToEdit, ami megmondja, hogy az adott lista szerkesztésre kerül-e vagy törlésre.
   * Továbbá egy egy esemény bezárásra és elfogadásra.
   * Ezzel szemben a PopUpDeleteWindow komponens a show mellett onCancel és onConfirm eseményeket kapcs csak.
   */
  return (
    <div className={`left-pane ${isDarkMode ? 'dark' : 'light'}`}>
      <input
        type="text"
        placeholder="Keresés a listák között"
        value={searchTerm}
        onInput={handleSearchInput}
        className="search-input"
      />
      <div className="lists-container">
        {localShoppingLists
          .filter((list) => list.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((list) => (
            <ShoppingList 
              key={list.id} 
              list={list} 
              onDelete={handleDeleteList} 
              onEdit={handleEditList} 
              onClick={() => handleListClick(list)}
            />
          ))}
      </div>
      <div className="add-button-container">
        <button className="add-button" onClick={handleAddNewList}>
          +
        </button>
      </div>

      <PopUpAddWindow
        show={showAddPopup}
        isDarkMode={isDarkMode}
        listToEdit={listToEdit}
        onCancel={handlePopupCancel}
        onOk={handlePopupOk}
      />

      <PopUpDeleteWindow 
        show={showDeletePopup} 
        onCancel={() => setShowDeletePopup(false)} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default LeftPane; /* A komponens exportálása. */
