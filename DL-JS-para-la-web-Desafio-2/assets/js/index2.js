function sumar(){
    let suma = parseInt(document.getElementById("wave").value) + parseInt(document.getElementById("hand").value) + parseInt(document.getElementById("shop").value)
    return suma
}

document.getElementById("submit").addEventListener("click", ()=>{
    let suma = sumar()
    if (suma > 10){
        alert("Demasiados Stickers")
        document.getElementById("submit").className = "btn btn-secondary text disabled"
}
document.getElementById("total").innerText = suma
})