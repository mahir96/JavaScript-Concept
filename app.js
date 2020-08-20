// Document
// console.log(document.getElementById("items-list"));

// // getting the id
// console.log(document.getElementById("items-list").id);

// const Myitems = document.getElementById("items-list");
// Myitems.style.color = "#fcfcfc";
// Myitems.style.background = "#000";
// Myitems.textContent = "Item-list";
// Myitems.innerHTML = "<span>New List</span>";
// console.log((document.body.innerHTML = "<span>Hellow Mahir</span>"));

// document querySelector
console.log(document.querySelector("#items-list"));
console.log(document.querySelector(".card"));

document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(2)").style.color = "green";
