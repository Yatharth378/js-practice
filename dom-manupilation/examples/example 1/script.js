const container = document.querySelector("#container");

const p = document.createElement("p");
p.classList.add("paramain");
p.style.color = "red";
p.textContent = "Hey I'm red!";

const headerThree = document.createElement("h3");
headerThree.style.color = "blue";
headerThree.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.style.border = "black";
div.style.backgroundColor = "pink";
div.classList.add("content");

const headerOne = document.createElement("h1");
headerOne.textContent = "I'm in a div";

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "ME TOO!";

container.appendChild(p);
container.appendChild(headerThree);
container.appendChild(div);
div.appendChild(headerOne);
div.appendChild(para);

const btn = document.querySelector("#btn");
btn.addEventListener("click",() => { alert("Hello World!")});
btn.addEventListener("click", function(e){
    console.log(e.target);
});
btn.addEventListener("click", function(e){
    e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {alert(button.id)});
});




