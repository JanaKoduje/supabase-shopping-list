import "./style.css";
import { signOut } from "../functions/auth";

export const Header = (props) => {
  const { session } = props;

  let userContent = `
    <nav>
      <a href="/register">Registrovat</a>
      <a href="/login">Přihlásit</a>
    </nav>
  `;

  if (session) {
    userContent = `<div>${session.user.email}<button class="btn-logout">Odhlásit</button></div>`;
  }

  const element = document.createElement("header");
  element.innerHTML = `
    <div class="container">  
      <nav>
        <a href="/">Domů</a>  
      </nav>
      <div class="user">
        ${userContent}
      </div>
    </div>
  `;

  const logoutBtn = element.querySelector(".btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault;
      signOut().then((response) => {
        const { error } = response;
        if (error) {
          console.log("error: ", error);
        } else {
          window.location.href = "/login";
        }
      });
    });
  }

  return element;
};
