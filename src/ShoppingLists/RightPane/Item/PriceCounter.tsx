import './PriceCounter.less'; /* LESS fájl importálása az árkalkulátor stílusához. */

/*
 * PriceCounter komponens, amely az árak összegzéséért felel.
 * A kapott `items` tömb alapján kiszámítja a vásárolt termékek összesített árát.
 */
const PriceCounter = ({ items }) => {
  const totalPrice = items
    .filter((item) => !item.hasBought) /* Csak a vásárolatlan tételeket szűri. */
    .reduce((sum, item) => sum + item.price * item.quantity, 0); /* Összegzi az árakat. */

  /*
   * A komponens egy `div` elemet renderel, amelyben az összesített ár jelenik meg.
   * Az értéket két tizedesjegyre kerekíti a `toFixed` metódussal.
   */
  return (
    <div className="price-counter">
      <strong>Összes ár: {totalPrice.toFixed(2)} Ft</strong>
    </div>
  );
};

export default PriceCounter; /* Komponens exportálása. */