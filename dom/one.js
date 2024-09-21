// i. What is node type of element having id “form-content”.
var formContent = document.getElementById("form-content");
console.log("Node type of form-content:", formContent.nodeType);

// ii. Show node type of element having id “lastName” and its child node.
var lastName = document.getElementById("lastName");
console.log("Node type of lastName:", lastName.nodeType);
console.log("Child node of lastName:", lastName.childNodes[0].nodeValue);

// iii. Update child node of element having id “lastName”.
lastName.childNodes[0].nodeValue = "Last Name: Doe";
console.log("Updated child node of lastName:", lastName.childNodes[0].nodeValue);

// iv. Get First and last child of id “main-content”.
var mainContent = document.getElementById("main-content");
console.log("First child of main-content:", mainContent.firstChild);
console.log("Last child of main-content:", mainContent.lastChild);

// v. Get next and previous siblings of id “lastName”.
console.log("Next sibling of lastName:", lastName.nextSibling);
console.log("Previous sibling of lastName:", lastName.previousSibling);

// vi. Get parent node and node type of element having id “email”
var email = document.getElementById("email");
console.log("Parent node of email:", email.parentNode);
console.log("Node type of email's parent:", email.parentNode.nodeType);
