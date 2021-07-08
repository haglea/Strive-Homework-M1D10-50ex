/*              DOM              */


console.log("--EX31--")
//31) Get element with ID "container" from the page
const divContainer = document.getElementById("container")
console.log(divContainer)

console.log("--EX32--")
//32) Get every "td" from the page
const tdFromPage = document.querySelectorAll("td")
console.log(tdFromPage)

console.log("--EX33--")
//33) Create a cycle that prints the text inside every td of the page
for (i=0;i<tdFromPage.length;i++) {
        console.log(tdFromPage[i].innerHTML)
}

console.log("--EX34--")
//34) Write a function to change the heading of the page

const changeHeadingh1 = function () {
        let headingh1 = document.querySelector("h1")
        headingh1.innerHTML = "changed heading text"
}
// changeHeadingh1()

console.log("--EX35--")
//35) Write a function to add an extra row to the table
const addExtraRow = function () {
        const table = document.querySelector("table")
        const extraRow = document.createElement("tr")
        extraRow.innerHTML = "extra Row"
        table.appendChild(extraRow)
}
//addExtraRow()

console.log("--EX36--")
//36) Write a function to add the class "test" to each row in the table
const addClassTest = function () {
        let eachRow = document.querySelectorAll("tr")           
        for (i = 0; i < eachRow.length; i++)  {
                eachRow[i].classList.add("test")
        }      
}
//addClassTest()

console.log("--EX37--")
//37) Write a function to add a red background to every link in the page
const addRedBg = function () {
        let everyLink = document.querySelectorAll("a")
        for (i = 0; i < everyLink.length; i++)  {
        everyLink[i].style.backgroundColor = "red"
}
}
//addRedBg()

console.log("--EX38--")
//38) Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
        console.log("page is correctly loaded")
}


// 39) Write a function to add new items to a UL
const addNewItems = function (numberLi) {
        let ul = document.querySelector("ul")
        for (i = 0; i < numberLi; i++) { 
        let li = document.createElement("li")
        li.innerHTML = "new list item"
        ul.appendChild(li)        
        }
}
//addNewItems(3)

console.log("--EX39--")
//40) Write a function to empty a list
const emptyList = function () {
        let ol = document.querySelector("ol")
        ol.remove() 
}
//emptyList()