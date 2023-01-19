const boards = [
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "28",
        "size": "5'7",
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
        "size": "6'7",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "33",
        "size": "6'3",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "33",
        "size": "5'7",
    },
    {
        "name": "SHARPEYE Inferno 72",
        "description": "responsiva, remadora, vérsatil y radical",
        "src": "./assets/images/inferno-72.jpeg",
        "liters": "34",
        "size": "6'1",
    }
]

const mainSection = document.getElementById("main")
const inputSize = document.getElementById("size")
const inputMinL = document.getElementById("min-l")
const inputMaxL = document.getElementById("max-l")
const buttonSearch = document.getElementById("size")

function init(){
    let articles = boards.map(val => `
    <article class="card">
        <div class="card-image">
            <img src="${val.src}" alt="inferno-72">
        </div>
        <div class="card-body">
            <h4>${val.name} <span>${val.size}</span> <span>${val.liters}</span>lts</h4>
            <h5>${val.description}</h5>
        <h3>$450.000</h3>
        <button>Comprar</button>
        </div>
    </article>
    `).join("")
    main.innerHTML = articles
}

init()