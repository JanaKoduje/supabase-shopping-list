import { ShoppingItem } from "../ShoppingItem/index.js";
import { getShoppingItem, addShoppingItem } from "../functions/db.js";
import "./style.css";

export const ShoppingList = (props) => {
  const { session, items } = props;

  const element = document.createElement("div");
  element.classList.add("shopping-list");
  element.innerHTML = `
    <form>
      <label class="form-field">
        Produkt: <input class="product-input" type="text" />
      </label>
      <label class="form-field">
        Množství: <input class="amount-input" type="number" />
      </label>
      <label class="form-field">
        Jednotka: <input class="unit-input" type="text" />
      </label>
      <button type="submit">Přidat položku</button>
    </form>
    <ul class="shopping-list__items"></ul>
  `;

  if (items === undefined) {
    getShoppingItem(session.user.id).then((response) => {
      const { data, error } = response;
      if (error) {
        console.log("error: ", error);
      } else {
        element.replaceWith(ShoppingList({ session: session, items: data }));
      }
    });
  } else {
    const ulElement = element.querySelector("ul");
    ulElement.append(...items.map((item) => ShoppingItem({ item })));
  }

  const formElm = element.querySelector("form");
  formElm.addEventListener("submit", (e) => {
    e.preventDefault();
    addShoppingItem(
      formElm.querySelector(".product-input").value,
      Number(formElm.querySelector(".amount-input").value),
      formElm.querySelector(".unit-input").value,
      session.user.id
    ).then((response) => {
      const { error } = response;
      if (error) {
        console.log("error: ", error);
      } else {
        getShoppingItem(session.user.id).then((response) => {
          const { data, error } = response;
          if (error) {
            console.log("error: ", error);
          } else {
            element.replaceWith(
              ShoppingList({ session: session, items: data })
            );
          }
        });
      }
    });
  });

  return element;
};
