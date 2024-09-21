

// i. Get element of id "main-content" and assign them in a variable.
var mainContent = document.getElementById("main-content");
console.log(mainContent);

// ii. Display all child elements of "main-content" element.
console.log(mainContent.children);

// iii. Get all elements of class "render" and show their innerHTML in browser.
var renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.
document.getElementById("first-name").value = "kinza";

// v. Repeat part iv for id "last-name" and "email".
document.getElementById("last-name").value = "fatima";
document.getElementById("email").value = "kinzafaima@example.com";
