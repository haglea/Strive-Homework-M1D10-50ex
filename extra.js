/*              EXTRA                   */

console.log("--EX41--")
//41) Add an eventListener to alert when the mouse is over a link, displaying the URL
/* let links = document.querySelectorAll("a")
for (i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function() { alert("mouse over link") })
} */

console.log("--EX42--")
//42) Add a button to hide every image on the page
let table = document.querySelector("table")
const addHideButton = function () {
        
        table.insertAdjacentHTML("beforebegin", `<button>Hide images</button>`)
        let hideButton = document.querySelector("button")        
        let images = document.querySelectorAll("img")  
        hideButton.onclick = function () {
                images.forEach((image) => image.classList.add("hide"))
        }         
}
addHideButton()

console.log("--EX43--")
//43) Add a button to hide and show the table from the page
const hideShowButton = function () {
        table.insertAdjacentHTML("beforebegin", `<button>Hide&Show images</button>`)
        let hideShowButton = document.querySelectorAll("button")[1]
        hideShowButton.onclick = function () {
                table.classList.add("hide")
        }
}
hideShowButton()

console.log("--EX44--")
//44) Write a function to sum every number inside the TD (if the content is numeric)
let tds = document.querySelectorAll("td");
const sumTD = function () {
  let sum = 0;
  for (i = 0; i < tds.length; i++) {
    let parsedNumber = parseInt(tds[i].innerText);
    console.log(parsedNumber)
    if (isNaN(parsedNumber)) {      
    } else {sum += parsedNumber;}
  }
  console.log(sum);
  return sum;
};
sumTD();

console.log("--EX45--");
//45) Delete the last letter from the title each time the user clicks on it
const deleteLastLetter = function () {
  let h1 = document.querySelector("h1");  
  h1.onclick = function () {
    h1.innerText = h1.innerText.substring(0, h1.innerText.length - 1);
  };
};
deleteLastLetter();

console.log("--EX46--");
//46) Change a single TD background color when the user clicks on it
const changeTDBackground = function () {
        tds.forEach((td) => {
                td.onclick = function () { td.style.backgroundColor = "green" }
        } )      
}
changeTDBackground()

console.log("--EX47--");
//47) Add a button DELETE, on click it should delete a random TD from the page
const deleteRandomTD = function () {
        table.insertAdjacentHTML("beforebegin", `<button>Delete random TD</button>`)
        let deleteRandomTDButton = document.querySelectorAll("button")[2]       
        deleteRandomTDButton.onclick = function () {                
                        let random = Math.floor((Math.random() * tds.length) + 1)
                        tds[random].remove()  
        }
}
deleteRandomTD()

console.log("--EX48--");
//48) Add a pink border to a cell when the mouse is over it
const addPinkBorder = function () {        
         tds.forEach((td) => {
                 td.onmouseover = function() {
                        td.style.border = "solid pink";
                 }              
         })         
}
//addPinkBorder()

console.log("--EX49--");
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
const add4rows3cols = function () {
        let newTable = document.createElement("table")
        let container = document.querySelector("#container")        
        for (i = 0; i < 4; i++ ) {
                let row = document.createElement("tr")
                for (j = 0; j < 3; j++) {
                        let cell = document.createElement("td")
                        cell.width =  "75"
                        cell.appendChild(document.createTextNode("row:"+ (i + 1)  + "column:" + (j + 1)))
                        row.appendChild(cell)
                } newTable.appendChild(row)
        } container.appendChild(newTable)
}
//add4rows3cols()

console.log("--EX50--");
// 50) Write a function to remove the table from the page 
const removeTable = function () {
        let table = document.querySelector("table")
        table.remove()
}
//removeTable()