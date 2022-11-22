const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");

btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  deleteCreateElements(input.value);
  input.value = "";
});

function deleteCreateElements(value) {
  console.log(value);
  const li = createElement('li')
  li.className = 'li'
}
