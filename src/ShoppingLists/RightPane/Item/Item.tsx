import './Item.less'; /* Az Item komponenshez tartozó less fájl importálása. */

interface ItemProps {
  id: number; /* Az elem egyedi azonosítója. */
  name: string; /* Az elem neve. */
  price: number; /* Az elem ára. */
  category: string; /* Az elem kategóriája. */
  quantity: number; /* Az elem mennyisége. */
  unit: string; /* Az elem mértékegysége. */
  hasBought: boolean; /* Az elem megvásárlási állapota. */
  onDelete: (itemId: number) => void; /* Törlési eseménykezelő függvény. */
  onEdit: (itemId: number) => void; /* Szerkesztési eseménykezelő függvény. */
  onToggleBought: (itemId: number, bought: boolean) => void; /* Megvásárlási állapot váltásának eseménykezelője. */
}

const Item = ({ id, name, price, category, quantity, unit, hasBought,onDelete, onEdit, onToggleBought}: ItemProps) => {
  const categoryImage = `./Images/${category}.png`; /* A kategóriához tartozó kép elérési útja. */

  /*
   * A komponens megjeleníti az elem adatait, mint például nevét, árát, mennyiségét, kategóriáját és állapotát. 
   * Egy checkbox-szal kezeli, hogy az elem már megvásárlásra került-e.
   * Van egy kép egy ceruzával ezzel szerkeszthető a termék, az onClick-hez az onEdit-et rendeli.
   * És van egy kép egy kukáról is, ezzel lehet a terméket törölni, az onClick-hez az onDelete eseményt rendeli.
   */
  return (
    <div className="item">
      <img src={categoryImage} alt={category} className="item-image" />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-info">
          {price} Ft - {quantity} {unit}
        </span>
      </div>
      <input
        type="checkbox"
        className="purchase-checkbox"
        checked={hasBought} 
        onChange={(e) => onToggleBought(id, (e.target as HTMLInputElement).checked)}
      />      
      <img 
        src="/Images/editicon.png"
        alt="Szerkesztés"
        className="edit-icon"
        onClick={() => onEdit(id)} 
      />
      <img
        src="/Images/trashbin.png"
        alt="Törlés"
        className="trash-icon"
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export default Item; /* Komponens exportálása. */