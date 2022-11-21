// const img = document.querySelector("img")
// console.log(img)

// const req = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     // request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener("load", ()=> {
//         console.log(JSON.parse(request.response))
//         const photo = JSON.parse(request.response)

//         img.setAttribute("src", photo?.photo)
//     })
// }

// req()

// som.addEventListener("input", ()=>{
    //     const request = new XMLHttpRequest()
    //     request.open("GET", "data.json")
    //     request.setRequestHeader("Content-type", "application/json")
    //     request.send()
    //     request.addEventListener("load", () =>{
        //         const response = JSON.parse(request.response)
        //         usd.value = (som.value / response.usd).toFixed(2)
        //     }
        //     )
        // })
        
const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
        
    
const convert = (elem, target, isTrue) => { 
    elem.addEventListener("input", () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener("load", () =>{
        const response = JSON.parse(request.response)
        isTrue ?
        (target.value = (elem.value / response.usd).toFixed(2))
        :
        (target.value = (elem.value * response.usd).toFixed(2))

        elem.value === "" && (target.value = "") 
        }
        )
        }
    )
}

convert(som, usd, 4)
convert(usd, som, "")