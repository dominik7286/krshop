import { useState } from 'preact/hooks'; /* Importála a szükséges hook-okat. */

const Login = ({ setCurrentView, onLoginSuccess }) => {
  const [username, setUsername] = useState(''); /* A felhasználónév állapotát tárolja. */
  const [password, setPassword] = useState(''); /* A jelszó állapotát tárolja. */
  const [error, setError] = useState(''); /* A hibaüzenet állapotát tárolja. */

  /*
   * A handleLogin függvény a bejelentkezést kezeli.
   * Megakadályozza az alapértelmezz űrlapküldési viselkedést.
   * Ellenőrzi, hogy a megadott felhasználónév, jelszó páros létezik-e a localStorage-ban.
   * Ha nem, akkor hibaüzenetet állít be, ha igen akkor meghívja az onLoginSuccess-t. 
   */
  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
      setError('Hibás felhasználónév vagy jelszó!');
      return;
    }
    setError('');
    onLoginSuccess(username);
  };

  /*
   * Először egy form elem látható, aminek a beküldését a handleLogin függvény kezeli és a login-form CSS osztályt használja a stílusához.
   * Két mező szövegbevitelre szolgál, az egyik a felhasználónévnek, másik a jelszónak.
   * Mindkettő kötelezően kitöltendő és az onInput esemény lefut minden alkalommal, amikor a felhasználó adatot visz a mezőbe.
   * Az állapotokat pedig a megfelelő set függvény segítségével a komponens állapotába menti.
   * Van továbbá egy gomb, ami az űrlap beküldéséhez szükséges, ezt a type adja meg és a gombon lévő szöveg a Bejelentkezés.
   * Van egy feltételes kifejezés mely szerint ha az error állapot nem üres, akkor az értéke megjelenik.
   * És van továbbá egy bekezdés a regisztrációs gombnak, amire kattintva a setCurrentView-t registration-re állítja.
   */
  return (
    <form onSubmit={handleLogin} className="login-form">
      <input
        type="text"
        placeholder="Felhasználónév"
        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
        required
      />
      <input
        type="password"
        placeholder="Jelszó"
        onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        required
      />
      <button type="submit">Bejelentkezés</button>
      {error && <div className="error">{error}</div>}
      <p>
        Még nem regisztrált? <button type="button" onClick={() => setCurrentView('registration')}>Regisztrálj itt!</button>
      </p>
    </form>
  );
};

export default Login; /* Komponens exportálása. */
