const key1 = "911"
        const key2 = "714"
        document.getElementById("submit").addEventListener("click", () => {
            let result = document.getElementById("result")

            const digit1 = document.getElementById("pass1").value
            const digit2 = document.getElementById("pass2").value
            const digit3 = document.getElementById("pass3").value

            const key = digit1 + digit2 + digit3
            
            switch(key){
                case key1:
                    result.innerText = "clave 1 correcta"
                    break
                case key2:
                    result.innerText = "clave 2 correcta"
                    break
                default:
                    result.innerText = "clave incorrecta"
                    break
            }
        })