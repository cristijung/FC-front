const alternarTemaBtn = document.getElementById("alternarTemaBtn");

const body = document.body;

alternarTemaBtn.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    alternarTemaBtn.textContent = "Mudar para Tema Claro";
    alternarTemaBtn.classList.remove("btn-secondary");
    alternarTemaBtn.classList.add("btn-dark");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    alternarTemaBtn.textContent = "Mudar para Tema Escuro";
    alternarTemaBtn.classList.remove("btn-dark");
    alternarTemaBtn.classList.add("btn-secondary");
  }
});
