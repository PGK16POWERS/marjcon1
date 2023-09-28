const container = document.querySelector(".testimonial-parent");
const forwardBtn = document.querySelector("#forward");
const backBtn = document.querySelector("#back");
let index = 0;

forwardBtn.addEventListener("click", () => {
  index++;

  if (index === container.children.length) {
    index = 0;
  }

  // Hide all items
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.display = 'none';
  }

  // Show the current item
  container.children[index].style.display = 'block';
});

backBtn.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = container.children.length - 1;
  }

  // Hide all items
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.display = 'none';
  }

  // Show the current item
  container.children[index].style.display = 'block';
});

// Initially, hide all items except the first one
for (let i = 1; i < container.children.length; i++) {
  container.children[i].style.display = 'none';
}
