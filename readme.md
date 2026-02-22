### 1. `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`
```js
// getElementById → finds ONE element by its id
document.getElementById("myId");

// getElementsByClassName → finds MANY elements by class (HTMLCollection)
document.getElementsByClassName("myClass");

// querySelector → finds the FIRST element that matches a CSS selector
document.querySelector(".myClass");

// querySelectorAll → finds ALL elements that match a CSS selector (NodeList)
document.querySelectorAll(".myClass");
```

---

### 2. Create and insert a new element
```js
// Step 1: Create element
const newDiv = document.createElement("div");

// Step 2: Add content
newDiv.textContent = "Hello World";

// Step 3: Insert into DOM
document.body.appendChild(newDiv);
```

---

### 3. Event Bubbling
```js
// Events move UP from the target → parent → ancestors
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked (bubbled)");
});
```
**Simplest idea:** When you click a child, the event also "bubbles" to its parents.

---

### 4. Event Delegation
```js
// Put ONE listener on a parent, handle children inside it
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
});
```
**Simplest idea:** Instead of adding listeners to every child, add one to the parent and check the target.

---

### 5. `preventDefault()` vs `stopPropagation()`
```js
document.getElementById("link").addEventListener("click", (e) => {
  e.preventDefault();   // stops default action (like opening a link)
  e.stopPropagation();  // stops event from bubbling to parents
});
```
- **preventDefault()** → stops the browser’s default behavior.  
- **stopPropagation()** → stops the event from moving up to parent elements.

