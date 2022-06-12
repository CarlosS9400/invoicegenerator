let services = []
let sum = 0

const carBtn = document.getElementById("car-btn")
const lawnBtn = document.getElementById("lawn-btn")
const weedBtn = document.getElementById("weed-btn")
const details = document.getElementById("details")
const totalamount = document.getElementById("totalamount")
const sendBtn = document.getElementById("send-btn")



carBtn.addEventListener("click", function(){
    /* once the button is clicked, the button disables */

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

/* button to send the invoice.  Once, the button is clicked, enable all the price buttons*/

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
    /*check if each button clicked is the one wanted by the user and assigns the appropriate value to its respective variable*/

            typeService = "Wash Car"
            price = 10

            console.log(typeService + " $" + price)

            /*update the sum for the bill */
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
    /*output to the page */
    details.innerHTML = eachTransaction
    

    totalamount.textContent="$" + sum
    sum=0
}



