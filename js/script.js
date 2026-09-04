//elementos do DOM
const inputOption = document.querySelector("#input_option");

const containerSorteioContentFormInput = document.querySelector(
  "#container_sorteio__content__form",
);

const btn_adicionar = document.querySelector("#btn_adicionar");
const textError = document.querySelector(".textError");
const numbersOptions = document.querySelector("#span_number_options");
const btn_sortear = document.querySelector("#btn_sortearNovamente");

const containerSorteioContentResultItem = document.querySelector(
  "#container_sorteio__content__result_item",
);

//criando elementos
const textResultadoSorteio = document.createElement("p");

//variaveis
const arrayOptions = [];
let cont = 1;

//funcoes

function adicionarDados(inputOption) {
  //criando elementos
  const divOptions = document.createElement("div");
  const textSorteio = document.createElement("p");

  //css
  divOptions.style.padding = "3px";
  divOptions.style.borderRadius = "10px";
  divOptions.style.border = "1px solid #000";
  divOptions.style.boxShadow = "2px 5px 10px #ddd";
  divOptions.style.textAlign = "center";
  divOptions.style.marginTop = "10px";
  divOptions.style.backgroundColor = "#a59ce0a8";
  textSorteio.style.paddingTop = "10px";
  textSorteio.style.fontWeight = "bolder";
  textSorteio.style.textTransform = "uppercase";

  //adicionando conteudos
  textSorteio.innerHTML = inputOption;
  divOptions.appendChild(textSorteio);

  containerSorteioContentFormInput.appendChild(divOptions);
}

function sortear(array) {
  const indiceSorteio = Math.floor(Math.random(array) * array.length);
  textResultadoSorteio.innerHTML = arrayOptions[indiceSorteio];

  containerSorteioContentResultItem.appendChild(textResultadoSorteio);
}

//eventos
btn_adicionar.addEventListener("click", (event) => {
  numbersOptions.textContent = cont++;

  const inputOptionValue = inputOption.value;

  if (inputOptionValue === "") {
    textError.textContent = "Campo vazio";

    return;
  }

  if (arrayOptions.includes(inputOptionValue)) {
    textError.textContent = "Esse valor já existe";
    return;
  }

  textError.textContent = "";

  arrayOptions.push(inputOptionValue);
  adicionarDados(inputOptionValue);

  inputOption.value = "";

  event.stopPropagation();
});

btn_sortear.addEventListener("click", () => {
  sortear(arrayOptions);
});

//funcoes
