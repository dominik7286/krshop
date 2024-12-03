import './Logout.less'; /* Importálja a Logout stílusait. */

const Logout = ({ onLogout }) => {
    /*
     * Elsőként egy div elem látható ami a logout-container CSS stílust használja.
     * Ezután következik az image elem, ami kattintás esetén az onLogout-ot hívja meg, és a logout-icon osztályt használa.
     */
  return (
    <div className="logout-container">
      <img
        src="./Images/logout.png" 
        alt="Logout"
        className="logout-icon"
        onClick={onLogout}
      />
    </div>
  );
};

export default Logout; /* A komponens exportálása. */