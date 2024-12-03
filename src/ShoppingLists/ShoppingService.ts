/*
 * A ShoppingItemDto típus definiálja az egyes bevásárlólistán szereplő termékek adatait.
 */
export type ShoppingItemDto = {
  id: number;       /* Egyedi azonosító */
  name: string;     /* A termék neve */
  category: string; /* A termék kategóriája */
  price: number;    /* A termék ára */
  quantity: number; /* A termék mennyisége */
  unit: string;     /* A mértékegység */
  hasBought: boolean; /* Jelzi, hogy a termék meg lett vásárolva */
};

/*
 * A ShoppingListDto típus egy bevásárlólista adatait tartalmazza.
 */
export type ShoppingListDto = {
  id: number;          /* A lista egyedi azonosítója */
  owner: string;       /* A lista tulajdonosa */
  listName: string;    /* A lista neve */
  store: string;       /* A bolt neve, ahol a lista vásárlása történik */
  description: string; /* A lista leírása */
  items: ShoppingItemDto[]; /* A lista elemei */
};

/*
 * A UserDto típus egy felhasználó adatait tartalmazza.
 */
export type UserDto = {
  id: string;         /* A felhasználó egyedi azonosítója */
  username: string;   /* A felhasználó neve */
  displayName: string;/* A felhasználó megjelenítési neve */
};

/*
 * A shoppingService objektum felelős a bevásárlólisták adatainak kezeléséért.
 */
export const shoppingService = {
  /*
   * A getShoppingLists függvény lekéri a bevásárlólistákat a localStorage-ból.
   * Ha van eltárolt adat, azt JSON formátumban visszaadja, egyébként üres tömböt ad vissza.
   */
  getShoppingLists: () => {
    const lists = localStorage.getItem('shoppingLists');
    return lists ? JSON.parse(lists) : [];
  },

  /*
   * Az addItemToList függvény hozzáad egy új elemet a megadott lista elemeihez.
   * A listId segítségével megtalálja a kívánt listát, majd hozzáadja az új elemet.
   * Végül frissíti a localStorage-ban tárolt listákat.
   */
  addItemToList: (listId, newItem) => {
    const shoppingLists = shoppingService.getShoppingLists();
    const listIndex = shoppingLists.findIndex(list => list.id === listId);
    if (listIndex !== -1) {
      shoppingLists[listIndex].item.push(newItem);
      localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists)); 
    }
  },

  /*
   * Az updateShoppingList függvény frissíti a megadott listát egy megadott módosító függvény alapján.
   * A listId alapján megtalálja a kívánt listát, és alkalmazza a módosító függvényt az egész listára.
   * Ezután frissíti a localStorage-ot a módosított listákkal.
   */
  updateShoppingList: (listId: number, updateFn: (list: ShoppingListDto) => ShoppingListDto) => {
    const shoppingLists = shoppingService.getShoppingLists(); 
    const listIndex = shoppingLists.findIndex((list) => list.id === listId);
    if (listIndex !== -1) {
      shoppingLists[listIndex] = updateFn(shoppingLists[listIndex]);
      localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists));
    }
  },
};
