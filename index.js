let services = []

let sum = 0

const carBtn = document.getElementById("car-btn")
const lawnBtn = document.getElementById("lawn-btn")
const weedBtn = document.getElementById("weed-btn")
const details = document.getElementById("details")
const totalamount = document.getElementById("totalamount")
const sendBtn = document.getElementById("send-btn")



carBtn.addEventListener("click", function(){
    carBtn.disabled = true 
    services.push("car")
    renderServices("car")
    //console.log(services)
    //console.log(carClicked)
    
    
})

lawnBtn.addEventListener("click", function(){
    
    lawnBtn.disabled = true
    services.push("lawn")
    renderServices("lawn")
    //console.log(services)
    //console.log(lawnClicked)
    
})

weedBtn.addEventListener("click", function(){
    weedBtn.disabled = true
    services.push("weed")
    renderServices("weed")
     //console.log(services)
     //console.log(weedClicked)
})

sendBtn.addEventListener("click", function(){
    services=[]
    renderServices("")
    carBtn.disabled = false
    lawnBtn.disabled = false
    weedBtn.disabled = false
})

function renderServices(service) {
    
    
    let typeService = ""
    let price = 0
    let eachTransaction = ""

    for (let i = 0; i<services.length; i++){
        if(services[i] === "car") {

            typeService = "Wash Car"
            price = 10

            console.log(typeService + " $" + price)
            sum+=price
           
        }
        if (services[i] === "lawn") {
            typeService = "Mown Lawn"
            price = 20
            
            console.log(typeService  + " $" + price)
            sum+=price
           
        } 
        if (services[i] === "weed") {
            typeService = "Pull Weed"
            price = 30
            
            console.log(typeService + " $" + price)
            sum+=price
            
            
        }

        eachTransaction += `<div><span>${typeService}</span><span>${price}</span></div>`

       

    }

    details.innerHTML = eachTransaction
    

    totalamount.textContent="$" + sum
    sum=0
}



