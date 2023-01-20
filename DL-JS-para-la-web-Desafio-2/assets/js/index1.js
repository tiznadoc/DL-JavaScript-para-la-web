var border = true
        document.getElementById("tere").addEventListener("click", function(){
            if(border){
            this.className = "borderless"
            border = false
        }
        else {
        this.className = "border"
        border = true
        }
        })