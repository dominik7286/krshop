import './ShoppingList.less'; /* A less fájl importálása a ShoppingList komponenshez. */

const ShoppingList = ({ list, onDelete, onClick, onEdit }) => {
  /*
   * A getStoreIcon függvény egy adott áruház nevéhez (store) megfelelő ikont ad vissza.
   * Ha a store értéke nem definiált, alapértelmezett képet használ.
   */
  const getStoreIcon = (store) => {
    return `/Images/${store?.toLowerCase() || 'store'}.png`; 
  };

  /*
   * A div a listák külső tárolója, a shopping-list-item biztosítja az elem stílusát és ha a felhasználó rákattint egy elemre, akkor az onClick függvény fut le.
   * A következő egy kép, amit a getStoreIcon függvény segítségével állítódik be, stílusnak pedig a store-icon-t használja. 
   * Listaelem neve a következő elem, ennek a stílusát a list-name CSS osztály adja.
   * Végül két kép következik, az egyik egy ceruzát ábrázol a másik egy kukát.
   * Stílusként a nekik megfelelő CSS osztályt használják és onClick esetén a megfelelő függvényt. 
   */
  return (
    <div className="shopping-list-item" onClick={onClick}> 
      <img src={getStoreIcon(list?.store)} alt={list?.store || 'Áruház'} className="store-icon" />
      <span className="list-name">{list?.name || 'Nincs név'}</span>
      <img
        src="/Images/editicon.png"
        alt="edit"
        className="edit-icon"
        onClick={(e) => { e.stopPropagation(); onEdit(list); }} 
      />
      <img
        src="/Images/trashbin.png"
        alt="delete"
        className="delete-icon"
        onClick={(e) => { e.stopPropagation(); onDelete(list?.id); }} 
      />
    </div>
  );
};

export default ShoppingList; /* Komponens exportálása. */
