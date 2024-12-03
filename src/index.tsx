
import { render } from 'preact'; /* Render funckió importálása. */
import App from './App'; /* Az App komponens importálása az App.tsx fájlból. */
import './index.less'; /* A szükséges less fájl importálása. */
import "./Pwa" /* A Pwa importálása, hogy a kódja lefusson. */
/* 
 * Célja az alkalmazás megjelenítése böngészőben. 
 * Az első paraméter, az a komponens, amit renderelni szeretnénk.
 * A második paraméter a DOM elem, amiben meg akarjuk jeleníteni a komponenst, ez most egy HTML elem aminek id attribútuma app.
 */
render(<App />, document.getElementById('app'));