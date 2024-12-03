import { useState, useEffect } from 'preact/hooks'; /* Importálja a szükséges hookokat. */
import './PopUpAddWindow.less'; /* Importálja a PopUpAddWindow komponenshez tartozó stíluslapot. */

const PopUpAddWindow = ({ show, isDarkMode, listToEdit, onCancel, onOk }) => {
  const [newListData, setNewListData] = useState({ name: '', store: '', description: '' }); /* Az új vagy szerkesztendő bevásárlólista állapota. */

  /*
   * A useEffect figyeli a listToEdit változót.
   * Ha egy lista szerkesztésre kerül éppen, akkor beállítódnak a szerkesztendő lista adatai.
   */
  useEffect(() => {
    if (listToEdit) {
      setNewListData(listToEdit); 
    }
  }, [listToEdit]);

  /*
   * A handlePopupChange függvény kezeli az inputok változásait.
   * Frissíti a módosított mezőt a newListData változóban és a korábbi értékeket meg meghagyja.
   */
  const handlePopupChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setNewListData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /*
   * A handleOkClick függvény hívásakor a newListData állapotot átadja az onOk eseménykezelőnek.
   * Továbbá visszaállítja az állapotot alapértelmezett értékre.
   */
  const handleOkClick = () => {
    onOk(newListData);
    setNewListData({ name: '', store: '', description: '' });
  };

  /*
   * A handleCancelClick függvény hívásakor bezárja a popupot az onCancel eseménykezelővel.
   * Továbbá visszaállítja az állapotot alapértelmezett értékre.
   */
  const handleCancelClick = () => {
    onCancel();
    setNewListData({ name: '', store: '', description: '' });
  };

  /*
   * Ha a show tulajdonság értéke false, a komponens nem jelenik meg (null-t ad vissza).
   */
  if (!show) return null;

  /*
   * Az első elem egy konténer, ami a popup class nevet tartalmazza, majd egy, ami a popup-content-et.
   * Ezután van egy dinamikusan változó cím annak függvényében, hogy szerkeszti-e a kiválasztott listát a felhasználó.
   * Három inputot tartalmaz a popupwindow, egyet a névnek, egyet az üzletnek és egyet a lista leírásának.
   * Mindegyik text típusú, value-nak a newListData megfelelő adatát használja, onInput esetén a handlePopupChange-et kapja a két input popup-input CSS osztályt kap, a textarea popup-textarea-t.
   * Végül van egy konténer a gomboknak is.
   * Két gomb van egy ok és egy cancel, az isDarkMode függvényében változik a színe a gomboknak és az onClick-re a megfelelő függvényt kapják.
   */
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{listToEdit ? 'Bevásárlólista szerkesztése' : 'Új bevásárlólista'}</h3>
        <label>Bevásárlólista neve</label>
        <input
          type="text"
          name="name"
          placeholder="Lista neve"
          value={newListData.name}
          onInput={handlePopupChange}
          className="popup-input"
        />
        <label>Üzlet neve</label>
        <input
          type="text"
          name="store"
          placeholder="Üzlet neve"
          value={newListData.store}
          onInput={handlePopupChange}
          className="popup-input"
        />
        <label>Lista leírása</label>
        <textarea
          name="description"
          placeholder="Leírás"
          value={newListData.description}
          onInput={handlePopupChange}
          className="popup-textarea"
          rows={4}
        />
        <div className="popup-buttons">
          <button
            className="popup-button cancel"
            onClick={handleCancelClick}
            style={{ backgroundColor: isDarkMode ? 'darkred' : 'red' }}
          >
            Cancel
          </button>
          <button
            className="popup-button ok"
            onClick={handleOkClick}
            style={{ backgroundColor: isDarkMode ? 'darkgreen' : 'green' }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpAddWindow; /* A komponens exportálása. */
