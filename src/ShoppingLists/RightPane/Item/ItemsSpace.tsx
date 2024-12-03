import { useState, useEffect } from 'preact/hooks'; /* Importálja a szükséges hook-okat. */
import './ItemsSpace.less'; /* Importálja az ItemsSpace komponenshez tartozó CSS-t. */
import Item from './Item'; /* Egyedi elemek (termékek) megjelenítésére szolgáló komponens importálása. */
import PopUpDeleteWindow from '../../LeftPane/ShoppingList/PopUpDeleteWindow'; /* Törlés megerősítő ablak importálása. */
import { shoppingService } from '../../ShoppingService'; /* Bevásárlólista kezeléséhez szükséges adatok. */
import PriceCounter from './PriceCounter'; /* Árkalkulátor komponens importálása, amely kiszámolja a teljes összeget. */
import PopUpAddItemWindow from './PopUpAddItemWindow'; /* Új elem hozzáadására szolgáló ablak importálása. */

const ItemsSpace = ({ selectedList, isDarkMode }) => {
  const [items, setItems] = useState([]); /* Az aktuális bevásárlólista elemei. */
  const [showDeletePopup, setShowDeletePopup] = useState(false); /* A törlés megerősítő ablak láthatósága. */
  const [itemToDelete, setItemToDelete] = useState(null); /* Az éppen törlésre kijelölt elem. */
  const [showEditPopup, setShowEditPopup] = useState(false); /* A szerkesztő ablak láthatósága. */
  const [itemToEdit, setItemToEdit] = useState(null); /* Az éppen szerkesztés alatt álló elem. */

  /*
   * A useEffect figyeli a selectedList változását.
   * Ha változik, a lista elemeit id attribútummal kiegészítve frissíti.
   * Beállítja a megváltoztatott elemeket az aktuális lista elemeinek.
   */
  useEffect(() => {
    if (selectedList) {
      const updatedItems = (selectedList.item || []).map((item, index) => ({
        ...item,
        id: item.id || index + 1, 
      }));
      setItems(updatedItems);
    }
  }, [selectedList]);

  /*
   * A localStorage frissítése az aktuális lista elemeivel.
   * Ehhez az updateShoppingList függvényt használja.
   * És szintén beállítja a kiválasztott listára vonatkozó adatokat.
   */
  const updateLocalStorage = (updatedItems) => {
    const updatedList = {
      ...selectedList,
      item: updatedItems,
    };
    shoppingService.updateShoppingList(selectedList.id, () => updatedList);
    setItems(updatedItems);
    selectedList.item = updatedItems;
  };

  /*
   * Törlés gomb kezelése, beállítja a törlendő elemet és megnyitja a törlés megerősítő ablakot.
   */
  const handleDeleteItemClick = (itemId) => {
    setItemToDelete(itemId);
    setShowDeletePopup(true);
  };

  /*
   * Törlés megerősítése: az elem törlése a listából és az új lista mentése.
   * Szűri azt az elemet, aminek az id-ja megegyezik a törlésre kijelölt elem azonosítójával.
   * Frissíti a megmaradt elemeket és új indexet rendel hozzájuk.
   * Frissíti a localStorage-t, a törlés ablakot nem jeleníti meg tovább és a törlésre kijelölt elem is null lesz.
   */
  const handleConfirmDelete = () => {
    const updatedItems = items.filter(item => item.id !== itemToDelete);
    const updatedItemsWithNewIndex = updatedItems.map((item, index) => ({
      ...item,
      id: index + 1, 
    }));
    updateLocalStorage(updatedItemsWithNewIndex);

    setShowDeletePopup(false);
    setItemToDelete(null);
  };

  /*
   * A törlés megszakítása: a megerősítő ablak bezárása és a törlésre kijelölt elem alaphelyzetbe állítása.
   */
  const handleCancelDelete = () => {
    setShowDeletePopup(false);
    setItemToDelete(null);
  };

  /*
   * Szerkesztés gomb kezelése: szűrés a szerkesztendő elemre, majd annal beállítása és a szerkesztő ablak megnyitása.
   */
  const handleEditItemClick = (itemId) => {
    const item = items.find(item => item.id === itemId);
    if (item) {
      setItemToEdit(item);
      setShowEditPopup(true);
    }
  };

  /*
   * Szerkesztési változtatások mentéséért felelős metódus.
   * Elmenti a frissült elemeket és ezekkel frissíti a localStorage-t.
   * A szerkesztő ablak nem jelenik meg ezután és a szerkesztésre kijelölt elem is alaphelyzetbe áll.
   */
  const handleEditSave = (updatedItem) => {
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? { ...updatedItem } : item
    );
    updateLocalStorage(updatedItems);

    setShowEditPopup(false);
    setItemToEdit(null);
  };

   /*
   * Az elem megvásárolt állapotának váltása.
   * Megkeresi a paraméterben kapott id-val megegyező elemet.
   * És ennek az elemnek a hasBought attribútumát a paraméterben kapottra állítja.
   * Ezután frissíti a localStorage-t.
   */
  const handleToggleBought = (itemId, bought) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, hasBought: bought } : item
    );
    updateLocalStorage(updatedItems); 
  };
  
  /*
   * A visszatérés egy div elemmel kezdődik ami dinamikusan változó CSS-t használ a témának megfelelően.
   * Még egy div következik ami pedig az items osztályt kapja.
   * Ha a lista tartalmaz elemeket akkor map-pel minden elemhez létrehoz egy Item komponenst a termék adataival és a megfelelő függvények átadásával.
   * Ha nem akkor egy szöveget ír ki.
   * A következő a PriceCounter komponens ami kiszámolja és megjeleníti a listában szereplő még nem megvásárolt elemek teljes összegét.
   * A PopUpDeleteWindow komponens a következő adatokat kapja:
   * Show, ami az ablak láthatóságát kezeli, és a megfelelő függvények átadása cancel vagy ok esetén.
   * Végül az utolsó komponens a PopUpAddItemWindow, ami az alábbi adatokat kapja:
   * Show a láthatóságnak, isDarkMode a téma állapotának, megfelelő függvények onCancel és onOk esetén, a szerkesztendő elem adatai ha szerkesztésről van szó és a kiválasztott lista azonosítója.
   */
  return (
    <div className={`items-space ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="items">
        {items.length > 0 ? (
          items.map((item) => (
            <Item
              key={item.id}
              {...item}
              onDelete={() => handleDeleteItemClick(item.id)}  
              onEdit={() => handleEditItemClick(item.id)}
              onToggleBought={handleToggleBought}
            />
          ))
        ) : (
          <p>Nincsenek elemek a listában.</p>  
        )}
      </div>
      <PriceCounter items={items} />
      <PopUpDeleteWindow
        show={showDeletePopup}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    <PopUpAddItemWindow
        show={showEditPopup}
        isDarkMode={isDarkMode}
        onCancel={() => setShowEditPopup(false)}
        onOk={handleEditSave}
        itemToEdit={itemToEdit}
        selectedListId={selectedList.id}
      />
    </div>
  );
};

export default ItemsSpace; /* A komponens exportálása. */