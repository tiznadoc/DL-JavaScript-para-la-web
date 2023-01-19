const boards = [
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "28",
        "size": "5",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "38",
        "size": "7",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "34",
        "size": "7",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "33",
        "size": "6",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "33",
        "size": "5",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "34",
        "size": "6",
    }
]

const mainSection = document.getElementById("main")
const inputSize = document.getElementById("size")
const inputMinL = document.getElementById("min-l")
const inputMaxL = document.getElementById("max-l")
const buttonSearch = document.getElementById("search")
const textTotal = document.getElementById("total")

var total

function setTotal(array){
    textTotal.innerText = array.length
} 

function alterMain(array){
    boardsHTML = array.map(val => `
    <article class="card">
        <div class="card-image">
            <img src="${val.src}" alt="inferno-72">
        </div>
        <div class="card-body">
            <h4>${val.name}</h4>
            <h4>de <span>${val.size}</span> pies y <span>${val.liters}</span>lts</h4>
            <h5>${val.description}</h5>
        <h3>$450.000</h3>
        <button>Comprar</button>
        </div>
    </article>
    `)
    let cards = boardsHTML.join("")
    main.innerHTML = cards
    return boardsHTML
}

function init(){
    alterMain(boards)
    setTotal(boards)
}

function filterBySize(array){
    numSize = inputSize.value
    if(!numSize){
        alert("no rellenaste todos los campos")
        return
    }
    arrayFilter = array.filter(val => +val.size === +numSize)

    return arrayFilter
}

function filterByLiters(array){
    minL = inputMinL.value
    maxL = inputMaxL.value
    if(!maxL || !minL){
        alert("no rellenaste todos los campos")
        return
    }
    arrayFilter = array.filter(val => +val.liters >= +minL && +val.liters <= +maxL)
    
    return arrayFilter
}

buttonSearch.addEventListener('click', function(){
    finalArray = filterBySize(boards)
    finalArray = filterByLiters(finalArray)
    alterMain(finalArray)
    setTotal(finalArray)
})

init()