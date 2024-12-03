import { useState } from 'preact/hooks'; /* Importála a szükséges hook-okat. */

const Registration = ({ setCurrentView }) => {
  const [email, setEmail] = useState(''); /* Az e-mail cím állapota. */
  const [username, setUsername] = useState(''); /* A felhasználónév állapota. */
  const [password, setPassword] = useState(''); /* A jelszó állapota. */
  const [confirmPassword, setConfirmPassword] = useState(''); /* A jelszó megerősítésének állapota. */
  const [error, setError] = useState(''); /* A hibaüzenet állapota. */

  /*
   * A handleRegistration kezeli a regisztrációt.
   * Megakadályozza az alapértelmezz űrlapküldési viselkedést.
   * Ellenőrzi, hogy a két megadott jelszó egyezik-e, ha nem hibaüzenetet ír ki.
   * Ellenőrzi, hogy a megadott felhasználónév létezik-e már a localStorage-ban és ha igen hibaüzenetet ír ki.
   * Létrehoz egy új felhasználót és azt kimenti a localStorage-ba.
   * Visszavált login nézetre a setCurrentView függvény segítségével.
   */
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('A jelszavak nem egyeznek!');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      setError('Ez a felhasználónév már létezik!');
      return;
    }
    const newUser = { email, username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    setCurrentView('login');
  };

  /*
   * Először egy form elem látható, aminek a beküldését a handleRegistration függvény kezeli és a registration-form CSS osztályt használja a stílusához.
   * Négy mező szövegbevitelre szolgál, egy a felhasználónévnek, egy az e-mailnek és kettő a megegyező jelszavaknak.
   * Mind kötelezően kitöltendő és az onInput esemény lefut minden alkalommal, amikor a felhasználó adatot visz a mezőbe.
   * Az állapotokat pedig a megfelelő set függvény segítségével a komponens állapotába menti.
   * Van továbbá egy gomb, ami az űrlap beküldéséhez szükséges, ezt a type adja meg és a gombon lévő szöveg a Regisztrálás.
   * Van egy feltételes kifejezés mely szerint ha az error állapot nem üres, akkor az értéke megjelenik.
   * És van továbbá egy bekezdés a bejelentkezés gombnak, amire kattintva a setCurrentView-t login-ra állítja.
   */
  return (
    <form onSubmit={handleRegistration} className="registration-form">
      <input
        type="email"
        placeholder="Email"
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        required
      />
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
      <input
        type="password"
        placeholder="Jelszó megerősítése"
        onInput={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
        required
      />
      <button type="submit">Regisztrálás</button>
      {error && <div className="error">{error}</div>}
      <p>
        Már regisztráltál? <button type="button" onClick={() => setCurrentView('login')}>Jelentkezz be itt!</button>
      </p>
    </form>
  );
};

export default Registration; /* Komponens exportálása. */
