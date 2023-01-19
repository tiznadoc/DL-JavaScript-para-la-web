const arrayDivisas = ["uf", "ivp", "dolar", "dolar_intercambio", "euro", "ipc", "utm", "imacec", "tpm", "libra_cobre", "tasa_desempleo", "bitcoin"]
        
        const SelectDivisas = document.getElementById("selectDivisa")
        const TextResultado = document.getElementById("result")
        const buttonConvert = document.getElementById("submit")
        const InputConvert = document.getElementById("montoAConvertir")
        const chartContainer = document.getElementById("chartContainer")

        function createChart(dataObject){
            chartContainer.innerHTML = '<canvas id="chart"></canvas>'
            canvas = document.getElementById("chart")

            const labels = dataObject.dates.reverse();
            const data = {
                type: "line",
                data: {
                    labels: labels,
                    datasets:[
                        {
                            label: 'últimos 10 días',
                            data: dataObject.data.reverse(),
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1 
                        }
                    ]
                }
            }
            new Chart(canvas,data)
        }

        async function convertAsset(){
            try {
                asset = SelectDivisas.value
                result = await fetch(`https://mindicador.cl/api/${asset}`)
                resultJson = await result.json()
                console.log(resultJson)
                divisaCLP = resultJson.serie[0].valor
                convertCLP = +InputConvert.value

                console.log(divisaCLP,convertCLP)

                TextResultado.innerText = (convertCLP/divisaCLP).toFixed(2)

                const lastDays = {}

                lastDays.data = resultJson.serie.slice(0,10).map(val => val.valor)
                lastDays.dates = resultJson.serie.slice(0,10).map(val => dayjs(val.fecha).format('YYYY-MM-DD'))
                createChart(lastDays)
                console.log(lastDays)

            } catch (error) {
                
            }
        }

        selectHTML = SelectDivisas.innerHTML

        arrayDivisas.forEach(val => selectHTML += `
            <option value=${val}>${val}</option>
        `)

        SelectDivisas.innerHTML = selectHTML

        buttonConvert.addEventListener('click',convertAsset)