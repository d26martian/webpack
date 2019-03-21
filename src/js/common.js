import _ from "lodash";

function component() {
  let div = document.createElement("div");
  let element = document.createElement("p");

  element.innerHTML = "My template";
  div.classList.add("wrap");
  div.appendChild(element);
  element.classList.add("text");

  return div;
}
document.body.appendChild(component());

let add = (a, b) => a + b;
console.log(add(2, 7));
