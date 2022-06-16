// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
const mainDiv = document.getElementById("main");
document.body.onload = addElement;

function addElement () {
  const newH2 = document.createElement("h2");
  const newContent = document.createTextNode("Hi there and greetings from H2!");
  newH2.appendChild(newContent);

  const newP = document.createElement("p");
  const newContentP = document.createTextNode("Hi there and greetings from P!");
  newP.appendChild(newContentP);

  const newUl = document.createElement("ul");
  const newContentUl = document.createTextNode("Hi there and greetings from UL!");
  newUl.appendChild(newContentUl);

  const newLi = document.createElement("li");
  const newContentLi = document.createTextNode("Hi there and greetings!");
  newLi.appendChild(newContentLi);

  const secondP = document.createElement("p");
  const newContentSecondP = document.createTextNode("second paragraph!");
  secondP.appendChild(newContentSecondP);

  mainDiv.appendChild(newH2)
  mainDiv.appendChild(newP)
  mainDiv.appendChild(newUl)
  mainDiv.appendChild(secondP)
}

