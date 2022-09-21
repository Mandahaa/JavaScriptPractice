function marinaraSauce (cookName){
    let two = 2;
    console.log(`Hey, ${cookName}`)
    console.log("- Heat a medium large saucepan over medium heat.")
    console.log(`- Add ${two} tspns of oil and ${two} garlic cloves, cook until golden, about 2 minutes`)

}
marinaraSauce("Bob")

function celsiusToFahrenheit(celsius){
    
    console.log(`${celsius*9/5+32}`)

}
celsiusToFahrenheit(15)

function area(height, width){
    console.log(`${height*width}`)
}
area(10,20);

function fortuneTeller(jobTitle, address,partnerName, numOfChildren){
    
    let jobTitle
    let address
    let partnerName
    let numOfChildren

    console.log (`You will be a ${jobTitle} in ${address}, and marry to ${partnerName} with ${numOfChildren}`)
    
    return fortuneTeller

}
fortuneTeller(scientist, chicago, susan, 3)




