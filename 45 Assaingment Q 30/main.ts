// Quistion 30
//creating a array
let userName = ["Ahsan" ,"Saniya", "Admin","Miss Zaheeda","Narjis"];

// for each loop array 

userName.forEach(oneUser =>{ 
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser},whould you like to see a status report?`)
 }else{
    console.log(`Hello ${oneUser},thank you for logging in again.`)
 }
})

