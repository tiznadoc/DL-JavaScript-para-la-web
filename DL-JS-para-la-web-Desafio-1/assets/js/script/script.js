const precio = 379000

document.getElementById("purchase").addEventListener("click", function() {
    const cantidad = document.getElementById("cantidad").value
    const color = document.getElementById("colorselector").value
    const total = cantidad * precio

    document.getElementById("totalAPagar").innerText = total
    document.getElementById("cantidadFinal").innerText = cantidad
    document.getElementById("circle").style.backgroundColor = color

document.getElementById("colorselector")
})