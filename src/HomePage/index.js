import { getShoppingItem, addShoppingItem } from "../functions/db";
import { ShoppingList } from "../ShoppingList";

export const HomePage = (props) => {
  const { session } = props;
  

  if (!session) {
    window.location.href = "/login";
  }

  const element = document.createElement("div");
  element.classList.add("page");
  element.innerHTML = `
    <div class="container">
    <h1>Nákupní seznamy</h1>
    <div id="add"></div>
    <div id="lists"></div>
    </div>
    `;

  if (session === undefined) {
    return element;
  }



   element
    .querySelector("#lists")
    .append(
      ShoppingList({ session })
     );

  return element;
};
