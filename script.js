document.getElementById("change-btn").addEventListener("click", () => {
  const info = document.getElementById("info-text");
  info.textContent = "This text has been changed!";
  info.style.color = "#ff00ff";
  info.style.fontSize = "30px";
  info.style.backgroundColor = "#d3d3d3";
  info.style.padding = "15px";
});

document.getElementById("add-btn").addEventListener("click", () => {
  const list = document.getElementById("element-list");
  const newItem = document.createElement("li");
  newItem.textContent = `Element ${list.children.length + 1}`;
  list.appendChild(newItem);
});

document.getElementById("remove-btn").addEventListener("click", () => {
  const list = document.getElementById("element-list");
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  }
});

