// Create a variable to track the list of todo items.
const List = document.getElementById("List");

function addItems() {
  const item = prompt("Add Item:");
  document.getElementById(item).innerHTML +=
    // Gets the input from "item"
    List.items.push(document.getElementById("item").value);

  // - Each item should be shown added as a li tag in the string ("<li>" + item + "</li>" or `<li>${item}</li>`)
  document.getElementById("Summary").innerHTML += <li> + item + </li>;

  // Updates the "list" ul tag to show all the items currently in the list
  const ul = document.getElementById("List");

  ul.innerHTML = ""; // Clear existing list items

  for (const item of List) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);

    // Adds it to the list of todo items
  }
}

function summarizeList() {
  document.getElementById("Summary").innerHTML +=
    "Total Items: " + totalItems + "<br />";
  // - This should show the total number of items in the list
  "First Item: " + firstItem + "<br/>";
  // - This should show the first item in the list
  "Last Item: " + lastItem + "<br />";
  // - This should show the last item in the list. If the list has only 1 item then this will be the same as the first item.
}
