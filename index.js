/*
DOM 

        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list
*/

console.log("--EX31--")
const divContainer = document.getElementById("container")
console.log(divContainer)

console.log("--EX32--")
const tdFromPage = document.querySelectorAll("td")
console.log(tdFromPage)


console.log("--EX33--")
for (i=0;i<tdFromPage.length;i++) {
        tdFromPage.innerHTML = "Printing Text"
}

console.log("--EX34--")
const changeHeadingh1 = function () {
        const headingh1 = document.querySelector("h1")[0]
        headingh1.innerText = "changed heading text"
}
// changeHeadingh1()

console.log("--EX35--")
const addExtraRow = function () {
        const table = document.querySelector("table")
        const extraRow = document.createElement("tr")
        table.appendChild(extraRow)
}
//addExtraRow()
