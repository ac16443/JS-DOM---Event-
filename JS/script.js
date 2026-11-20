window.addEventListener("resize", () => {
      console.log("Current width:", window.innerWidth);
    });
/** Selecting */
let body = (document.body.style.backgroundColor = "#7ac1d1");
//console.log(body);
/**Return Values */
let byId = document.getElementById("byId");
//console.log("By ID", byId)
let = qSelector = document.querySelector("#query");
//console.log("By Query selector", qSelector);
let qAll = document.querySelectorAll(".bg-yellow");
//console.log(" By QSAll", qAll);
let qAll2 = document.querySelectorAll("li");
//console.log(" By QSAll", qAll2);
let ul = document.querySelector("#list");
let staticList = document.querySelectorAll(".colors li");
//console.log("Static", staticList.length, staticList);
let liveList = document.getElementsByTagName("li");
//console.log("live", liveList.length, liveList);
let newList = document.createElement("li");
newList.textContent = "li created from Js ===> 10th item ";
ul.appendChild(newList);
//console.log("10th List", newList);
//console.log("Static", staticList.length, staticList);
//console.log("live", liveList.length, liveList);
// function updateStyle(){
// liveList.style.color = 'purple';
// liveList.style.backgroundColor = 'lavender';
// }
Array.from(liveList).forEach((item, index) => {
  item.style.border = "2px solid gray";
  item.style.padding = '20px' ;
  
  item.addEventListener('mouseover', ()=>{
        item.style.width = '700';
        item.style.color = 'purple';
        item.style.backgroundColor = 'lavender';
console.log(item);
})

  //console.log("loop each", item);
});

let byClass = document.getElementsByClassName("bg-green");
//console.log("By Class Name", byClass);
let byClassEmpty = document.getElementsByClassName("green");
//console.log("By Class Name", byClassEmpty); //[]

let list = document.querySelectorAll(".colors li");
//console.log(list);
let el = document.getElementById("query");
//console.log(el);
el.className = "pink";
el.classList.add("gold");
//el.style.color= "#1eaee7"
//el.textContent = "Returns single element";

let tag = document.getElementsByTagName("li");
//console.log(tag);
// createElement("h1")
let header = document.createElement("h1");
header.textContent = "This header is created from jS file";
//console.log(header);
document.body.appendChild(header);
const fields = document.querySelectorAll(".missing");

if (fields.length === 0) {
  //console.log("No matching fields");
}
/************ Traversing between elements  ***********/
/*****Parent Child Moving down******/
let unOrderList = document.querySelector("#list");
/*console.log("Children", unOrderList.children);
console.log("Child Nods", ul.childNodes);//avoid childNodes because it count text
console.log("First Element", unOrderList.firstElementChild);
console.log("Last Child", unOrderList.lastElementChild); */

/**** Child to Parent   Moving up ******/
let firstList = document.querySelector("#byId");
/*console.log("who is Parent", firstList.parentElement);
console.log("first closest", firstList.closest);*/

/**** Between siblings ******/
let secondList = document.querySelector("#query");
/*console.log("Next Element", secondList.nextElementSibling);
console.log("previous Element", secondList.previousElementSibling);
console.log("first closest", secondList.closest);*/

/**Create new list */
let newUl = document.getElementById("fruitId");
const kiwi = document.createElement("li");
kiwi.textContent = "Kiwi";
newUl.appendChild(kiwi);    // add as last child
//console.log("Kiwi",newUl);
 
const fig = document.createElement("li");
fig.textContent = "Fig";
newUl.prepend(fig);         // add as first 
//console.log("First Child Fig", newUl);
const two = document.getElementById("two");
//two.textContent;              // "Mango"
two.textContent = "Banana";  
 //console.log("update Mango to B", two);
 newUl.removeChild(two);
//console.log("check HTML", newUl);
//newUl.innerHTML;    // the <li> tags, as a string
//newUl.innerHTML = "<li >Kiwi</li>";
 //const two = document.getElementById("two");
//newUl.removeChild(two);   // Mango is gone
// modern shortcut: two.remove();




/** change attribute */
const input = document.getElementById('fName');
 //console.log(input.type);
 //console.log(input);

input.hasAttribute("type");                       // "fname"
input.getAttribute("type");                       // "fname"
input.className = "field big";                       // "fname"
input.setAttribute("placeholder", "First name");
//console.log(input.className);                       // "fname"
//console.log(input.setAttribute("placeholder", "First name"));                       // "fname"
input.removeAttribute("type");                       // "fname"
                
input.classList.add("error");
//console.log("class error");
input.classList.remove("big");
//console.log("class error");
input.classList.toggle("active"); 

let myImg = document.getElementById("myBirds");
myImg.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE3Vz26cAcz_ZpI0DXhAWsciSEg2el9VSws3te-lEeQ&s=10';
myImg.alt = "chalk, Red , bomb"
myImg.width = "400";
myImg.height = "400";
//console.log(myImg);
/*** Event ************/

/**Form 1 */
let btnCount = document.getElementById('btn-count');
let inputCounter = document.getElementById('counter')


inputCounter.addEventListener("keydown", (e) => console.log("Pressed: " + e.key));
btnCount.addEventListener("click", (e) => console.log(e.value));

const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const message = document.getElementById("message");
console.log("Form", form);
form.addEventListener("submit", function (event) {
  if (email.value.trim() === "") {
    event.preventDefault();          // don't submit
    email.style.borderColor = "red";
    message.textContent = "Email is required";
  }
});

//**Form 1 */
let form1 = document.getElementById('loginForm');
let input1 = document.getElementById('my-email');
 form.addEventListener('click', (e)=>{
let val = input1.value.trim();
console.log("Value=>", val)
return val;
})

//*******  Propagation bubbling //preventDefault(); stopPropagation() *******//
let parentDiv = document.querySelector('#container');
let formMsg = document.querySelector(".msg-form");
let btnMsg = document.querySelector(".btn-msg")
parentDiv.addEventListener("click", (e)=>{
console.log("From container div");
console.log("captur flow 1");
}, {capture:true});
formMsg.addEventListener("click", (e)=>{
console.log("From Message Form", e);
console.log("captur flow 2");
}, {capture:true})
btnMsg.addEventListener("click", (e)=>{
console.log("Message Button ");
console.log("captur flow 3");
e.stopPropagation();
e.preventDefault();
}, {capture:true})




const card = document.getElementById("card");
const link = document.getElementById("link");

card.addEventListener("click", function () {
  console.log("Card clicked");
});

link.addEventListener("click", function (event) {
  console.log("Link clicked");

  event.stopPropagation();
  event.preventDefault();
});

