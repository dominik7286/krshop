import './PopUpDeleteWindow.less'; /* A PopUpDeleteWindow komponenshez tartozó stílusok importálása. */

const PopUpDeleteWindow = ({ show, onCancel, onConfirm }) => {
  /*
   * Ha a `show` hamis, a függvény null-t ad vissza, és semmi sem jelenik meg.
   */
  if (!show) return null;

  /*
   * Van két div, az egyik a popup-overlay CSS osztályt a másik a popup-content osztályt használja.
   * Ezután következik egy figyelmeztető üzenet ami megerősítést kér a felhasználótól.
   * Majd két gomb, az egyik a cancel-button, a másik a confirm-button osztályt használja és onClick esetén onCancel és onOK függvényeket kapnak.
   */
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Biztosan törölni szeretné ezt az elemet?</h2>
        <div className="popup-buttons">
          <button onClick={onCancel} className="cancel-button">Mégse</button>
          <button onClick={onConfirm} className="confirm-button">OK</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpDeleteWindow; /* Komponens exportálása. */
