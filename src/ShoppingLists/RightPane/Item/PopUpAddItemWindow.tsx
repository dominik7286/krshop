import { useEffect, useState } from 'preact/hooks'; /* Importálja a szükséges hookokat. */
import './PopUpAddItemWindow.less'; /* A komponenshez tartozó stíluslap importálása */

const PopUpAddItemWindow = ({ show, isDarkMode, onCancel, onOk, itemToEdit = null, selectedListId }) => {
  /* Az itemData állapotot tárolja, amely a termék adatokat tartalmazza. Kezdetben üres mezőkkel rendelkezik. */
  const [itemData, setItemData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    unit: '',
  });

  /*
   * A useEffect figyeli a itemToEdit változót, és ha van értéke, beállítja az itemData-t.
   */
  useEffect(() => {
    if (itemToEdit) {
      setItemData(itemToEdit); 
    }
  }, [itemToEdit]);

   /*
   * A handleChange függvény kezeli az inputok változásait.
   * Frissíti a megfelelő mezőt az itemData állapotban, és meghagyja a többi adatot.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /*
   * A handleOkClick függvény meghívja az onOk eseménykezelőt a kitöltött termékadatokkal.
   * Valamint alapértelmezett értékekkel állítja vissza a formot.
   * Hibát jelez ha bármely mező üres.
   * Az updatedItem-be tölti az adatokat az árat és a mennyiséget formázza.
   */
  const handleOkClick = () => {
    if (!itemData.name || !itemData.price || !itemData.quantity) {
      alert('Minden mezőt ki kell tölteni!');
      return;
    }

    const updatedItem = {
      ...itemData,
      price: parseFloat(itemData.price),
      quantity: parseFloat(itemData.quantity),

    };

    onOk(updatedItem);
    setItemData({ name: '', category: '', price: '', quantity: '', unit: '' });
  };

  /*
   * Ha a show false, akkor nem rendereljük a popupot (null-t ad vissza).
   */
  if (!show) return null;

  /*
   * Az első a popup ablakot tartalmazó div.
   * Van még egy div ami a tartalmat a módnak megfelelően stilizálja.
   * Az input mezők minden egyes termékinformációhoz (név, kategória, ár, mennyiség, egység) a változó adatokat jelenítik meg.
   * Valamint kezelik az onChange eseményeket a handleChange függvénnyel.
   * Van még ezen kívül két gomb is, amik a megfelelő CSS osztályokkal lettek design-olva és az egyik a frissített adatokat elfogadja a másik elfelejti.
   */
  return (
    <div className="popup">
      <div className={`popup-content ${isDarkMode ? 'dark' : 'light'}`}>
        <h3>{itemToEdit ? 'Termék szerkesztése' : 'Új termék hozzáadása'}</h3>
        <label>Termék neve</label>
        <input type="text" name="name" value={itemData.name} onChange={handleChange} />
        <label>Kategória</label>
        <input type="text" name="category" value={itemData.category} onChange={handleChange} />
        <label>Ár</label>
        <input type="text" name="price" value={itemData.price} onChange={handleChange} />
        <label>Mennyiség</label>
        <input type="text" name="quantity" value={itemData.quantity} onChange={handleChange} />
        <label>Egység</label>
        <input type="text" name="unit" value={itemData.unit} onChange={handleChange} />
        <div className="popup-buttons">
          <button className="popup-button cancel" onClick={onCancel} style={{ backgroundColor: isDarkMode ? 'darkred' : 'red' }}>Cancel</button>
          <button className="popup-button ok" onClick={handleOkClick} style={{ backgroundColor: isDarkMode ? 'darkgreen' : 'green' }}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpAddItemWindow; /* A komponens exportálása */
