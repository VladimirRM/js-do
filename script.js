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
  const li = document.createElement("li");
  const btn = document.createElement("button");
  li.className = "li";
  li.textContent = value;


  btn.className = "btn";
  btn.textContent = 'add';



  result.appendChild(li);
}
