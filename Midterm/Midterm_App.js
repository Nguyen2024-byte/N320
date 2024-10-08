// Create a variable to track the list of todo items.
const List = document.getElementById("List");

function addItem() {
  const item = document.getElementById("item").value;
  document.querySelector("List").innerHTML += "<li>" + item + "</li>";
}

function summarizeList() {
  document.getElementById("Summary").innerHTML +=
    "Total Items: " + totalItems + "<br />";
  // - This should show the total number of items in the list

  document.getElementById("Summary").innerHTML +=
    "First Item: " + firstItem + "<br/>";
  // - This should show the first item in the list

  document.getElementById("Summary").innerHTML +=
    "Last Item: " + lastItem + "<br />";
  // - This should show the last item in the list. If the list has only 1 item then this will be the same as the first item.
}
